// Shared helpers used by the converted Katalon test cases.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PROJECT_DIR = path.resolve(__dirname, '..');
const STATE_FILE = path.join(PROJECT_DIR, '.state', 'globals.json');
const UPLOAD_DIR = path.join(PROJECT_DIR, 'test-results', 'uploads');

// ---------------------------------------------------------------------------
// Execution profile + GlobalVariable replacement
// ---------------------------------------------------------------------------
function loadProfile() {
  const name = process.env.PROFILE || 'default';
  const file = path.join(PROJECT_DIR, 'profiles', `${name}.json`);
  if (!fs.existsSync(file)) throw new Error(`Profile not found: profiles/${name}.json`);
  const profile = JSON.parse(fs.readFileSync(file, 'utf8'));
  // Allow the two URLs to be overridden from .env / the command line.
  if (process.env.ELCOM_URL) profile.url = process.env.ELCOM_URL;
  if (process.env.ELCOM_DOMAIN) profile.domainname = process.env.ELCOM_DOMAIN;
  return profile;
}

/** Reset the shared state file from the profile (called once per run from global-setup). */
function resetGlobals() {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(loadProfile(), null, 2));
}

function readGlobals() {
  if (!fs.existsSync(STATE_FILE)) resetGlobals();
  return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
}

/**
 * G works like Katalon's GlobalVariable. Values written by one test (for example
 * G.currentarticlename) are saved to .state/globals.json so later tests in the
 * suite can read them, even if Playwright restarts its worker after a failure.
 */
const G = new Proxy({}, {
  get(_t, prop) {
    if (typeof prop !== 'string') return undefined;
    return readGlobals()[prop];
  },
  set(_t, prop, value) {
    const g = readGlobals();
    g[prop] = value;
    fs.writeFileSync(STATE_FILE, JSON.stringify(g, null, 2));
    return true;
  },
});

// ---------------------------------------------------------------------------
// Credentials (replace Katalon's "Login Details" data file on the network share)
// ---------------------------------------------------------------------------
// The login details are read from an Excel file. Which file is used:
//   1. ELCOM_CREDENTIALS_FILE in .env, if set
//   2. "credentialsfile" in the profile (profiles/<PROFILE>.json) - e.g. the Katalon data
//      file \\192.168.2.25\Common\QA\Katalon-Data\ec12-5-dev-profile - ADMIN.xlsx
//   3. C:\Users\<you>\ElcomAutomation\LoginDetails.xlsx (made by npm run create-login-file)
// Two layouts are understood (first sheet):
//   - Katalon style: labels in column A, values in column B
//       username | <value>
//       password | <value>
//       (optional rows: totpsecret, newuserpassword)
//   - Table style: header row, then one row per profile
//       Profile | Username | Password | TOTPSecret | NewUserPassword
//     The row whose Profile matches PROFILE (default "default") is used.
const LOCAL_CREDENTIALS_FILE = path.join(require('os').homedir(), 'ElcomAutomation', 'LoginDetails.xlsx');
const CREDENTIAL_COLUMNS = ['Profile', 'Username', 'Password', 'TOTPSecret', 'NewUserPassword'];
const CREDENTIAL_LABELS = {
  username: ['username', 'user name', 'user'],
  password: ['password'],
  totpSecret: ['totpsecret', 'totp secret', 'totp', 'mfa secret', 'secret'],
  newUserPassword: ['newuserpassword', 'new user password'],
};

// ---------------------------------------------------------------------------
// Encrypted values in the login details file
// ---------------------------------------------------------------------------
// The password is stored encrypted (AES-256-GCM) as  ENC:v1:<iv>:<tag>:<data>  (base64 parts).
// The key is NOT in the Excel file: it is read from ELCOM_CREDENTIALS_KEY (base64, 32 bytes)
// or from the key file below, which lives on this machine only (outside OneDrive).
//   npm run create-key         - makes the key (once per machine; Windows: ELCOM_CREDENTIALS_KEY user env var)
//   npm run encrypt-password   - asks for a password and prints the ENC:v1:... text for Excel
const ENC_PREFIX = 'ENC:v1:';
const KEY_FILE = process.env.ELCOM_CREDENTIALS_KEY_FILE
  || path.join(require('os').homedir(), 'ElcomAutomation', 'credentials.key');

function encryptionKey() {
  const b64 = process.env.ELCOM_CREDENTIALS_KEY
    || (fs.existsSync(KEY_FILE) ? fs.readFileSync(KEY_FILE, 'utf8').trim() : '');
  if (!b64) throw new Error('No encryption key found. Run "npm run create-key" (sets the ELCOM_CREDENTIALS_KEY environment variable),\n'
    + '  then close and reopen VS Code. Or put the key in ' + KEY_FILE + '.');
  const key = Buffer.from(b64, 'base64');
  if (key.length !== 32) throw new Error(`The encryption key in ${process.env.ELCOM_CREDENTIALS_KEY ? 'ELCOM_CREDENTIALS_KEY' : KEY_FILE} is not a 32-byte base64 key.`);
  return key;
}

function isEncrypted(value) {
  return String(value || '').startsWith(ENC_PREFIX);
}

function encryptSecret(plain) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', encryptionKey(), iv);
  const data = Buffer.concat([cipher.update(String(plain), 'utf8'), cipher.final()]);
  return ENC_PREFIX + [iv, cipher.getAuthTag(), data].map((b) => b.toString('base64')).join(':');
}

function decryptSecret(value) {
  const parts = String(value).slice(ENC_PREFIX.length).split(':');
  if (parts.length !== 3) throw new Error('Encrypted value is not in the ENC:v1:<iv>:<tag>:<data> format');
  const [iv, tag, data] = parts.map((p) => Buffer.from(p, 'base64'));
  const decipher = crypto.createDecipheriv('aes-256-gcm', encryptionKey(), iv);
  decipher.setAuthTag(tag);
  try {
    return Buffer.concat([decipher.update(data), decipher.final()]).toString('utf8');
  } catch {
    throw new Error('Could not decrypt a value in the login details file - it was encrypted with a different key, or the text was changed.');
  }
}

/** The login details file for the current profile (see the list above). */
function credentialsFile() {
  if (process.env.ELCOM_CREDENTIALS_FILE) return process.env.ELCOM_CREDENTIALS_FILE;
  return loadProfile().credentialsfile || LOCAL_CREDENTIALS_FILE;
}

let loadedCredentials = null;

/** Reads the login details for the current profile from the Excel file (once per run). */
async function loadCredentials() {
  if (loadedCredentials) return loadedCredentials;
  const file = credentialsFile();
  if (!fs.existsSync(file)) {
    throw new Error(`Login details file not found: ${file}\n`
      + '  Check the path (and that the network share is reachable), or see README "Login details".');
  }
  const ExcelJS = require('exceljs');
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(file);
  const sheet = workbook.worksheets[0];
  const text = (v) => String((v && typeof v === 'object' && 'text' in v) ? v.text : (v ?? '')).trim();
  const cell = (row, i) => text(row.getCell(i).value);
  const norm = (v) => v.toLowerCase().replace(/[\s_:-]+/g, ' ').trim();
  const keyFor = (label) => Object.keys(CREDENTIAL_LABELS).find((k) => CREDENTIAL_LABELS[k].includes(norm(label)));
  const profile = process.env.PROFILE || 'default';
  const found = { username: '', password: '', totpSecret: '', newUserPassword: '' };

  const header = {};
  let profileCol = 0;
  sheet.getRow(1).eachCell((c, i) => {
    const label = text(c.value);
    if (norm(label) === 'profile') profileCol = i;
    const k = keyFor(label);
    if (k) header[k] = i;
  });

  if (header.username && header.password) {
    // Table style: one row per profile
    let match = null;
    for (let r = 2; r <= sheet.rowCount; r++) {
      const row = sheet.getRow(r);
      const rowProfile = profileCol ? cell(row, profileCol) : 'default';
      if (norm(rowProfile) === norm(profile)) { match = row; break; }
    }
    if (!match) throw new Error(`No row for profile "${profile}" in ${file}`);
    for (const k of Object.keys(header)) found[k] = cell(match, header[k]);
  } else {
    // Katalon style: label in column A, value in column B
    for (let r = 1; r <= sheet.rowCount; r++) {
      const row = sheet.getRow(r);
      const k = keyFor(cell(row, 1));
      if (k && !found[k]) found[k] = cell(row, 2);
    }
  }
  for (const k of ['username', 'password']) {
    if (!found[k]) throw new Error(`No ${k} found in ${file} (sheet "${sheet.name}")`);
  }
  // The password must be stored encrypted; the other secrets may be.
  if (!isEncrypted(found.password)) {
    throw new Error(`The password in ${file} is not encrypted.\n`
      + '  Run "npm run encrypt-password", then put the ENC:v1:... text it prints in the password cell.');
  }
  for (const k of ['password', 'totpSecret', 'newUserPassword']) {
    if (isEncrypted(found[k])) found[k] = decryptSecret(found[k]);
  }
  loadedCredentials = { ...found, file };
  return loadedCredentials;
}

function requireLoaded(name) {
  if (!loadedCredentials) throw new Error('Login details not loaded yet - call await loadCredentials() first');
  return loadedCredentials[name];
}
const credentials = {
  get username() { return requireLoaded('username'); },
  get password() { return requireLoaded('password'); },
  get totpSecret() { return requireLoaded('totpSecret'); },
  // Password for the throwaway user TC9757 creates. Taken from the login details file when it
  // has a newuserpassword; otherwise a strong random one is made once per run (nobody needs
  // to log in as that user, so it does not have to be stored anywhere).
  get newUserPassword() {
    if (!requireLoaded('newUserPassword')) {
      const pick = (set, n) => Array.from(crypto.randomBytes(n), (b) => set[b % set.length]).join('');
      const chars = pick('ABCDEFGHJKLMNPQRSTUVWXYZ', 3) + pick('abcdefghijkmnopqrstuvwxyz', 5)
        // Elcom's password rules do not allow # % < > *; these four are allowed.
        + pick('23456789', 3) + pick('!@$&', 2);
      loadedCredentials.newUserPassword = chars.split('').sort(() => crypto.randomInt(3) - 1).join('');
    }
    return loadedCredentials.newUserPassword;
  },
};

// ---------------------------------------------------------------------------
// Groovy / Java replacements
// ---------------------------------------------------------------------------
/** System.nanoTime() replacement - returns a unique numeric string. */
function nanoTime() {
  return process.hrtime.bigint().toString();
}

/** Groovy String.containsIgnoreCase */
function containsIgnoreCase(text, search) {
  return String(text ?? '').toLowerCase().includes(String(search ?? '').toLowerCase());
}

/** new SimpleDateFormat(pattern).format(new Date()) for the patterns used in the suite. */
function formatDate(pattern, d = new Date()) {
  const p = (n, w = 2) => String(n).padStart(w, '0');
  return pattern
    .replace('yyyy', d.getFullYear())
    .replace('MM', p(d.getMonth() + 1))
    .replace('dd', p(d.getDate()))
    .replace('HH', p(d.getHours()))
    .replace('mm', p(d.getMinutes()))
    .replace('SSS', p(d.getMilliseconds(), 3))
    .replace('ss', p(d.getSeconds()));
}

/** Path to a file in /resources (was Include/Resources in Katalon). Case-insensitive, like Windows. */
function resource(relPath) {
  let current = path.join(PROJECT_DIR, 'resources');
  for (const part of relPath.split('/').filter(Boolean)) {
    const exact = path.join(current, part);
    if (fs.existsSync(exact)) { current = exact; continue; }
    const match = fs.existsSync(current)
      ? fs.readdirSync(current).find((f) => f.toLowerCase() === part.toLowerCase())
      : undefined;
    current = path.join(current, match || part);
  }
  return current;
}

/**
 * Copies a resource file to test-results/uploads with a timestamp in its name, so every
 * upload has a unique file name (same idea as the Katalon createTimeStampedImage helper,
 * but the copies no longer pile up inside the resources folder).
 */
function createTimeStampedFile(sourcePath, baseName) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  const ext = path.extname(sourcePath);
  const target = path.join(UPLOAD_DIR, `${baseName}_${formatDate('yyyyMMdd_HHmmss_SSS')}${ext}`);
  fs.copyFileSync(sourcePath, target);
  return target;
}

/** Copy used by the inline Files.copy(...) calls in the converted scripts. */
function copyFile(source, target) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

/** RFC 6238 TOTP (SHA-1, 6 digits, 30 s) - same defaults as the Totp class used in Katalon. */
function totpNow(base32Secret) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  const clean = base32Secret.replace(/[\s=-]/g, '').toUpperCase();
  let bits = '';
  for (const c of clean) {
    const v = alphabet.indexOf(c);
    if (v < 0) throw new Error('The totpsecret in the login details file is not a valid base32 string');
    bits += v.toString(2).padStart(5, '0');
  }
  const bytes = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) bytes.push(parseInt(bits.slice(i, i + 8), 2));
  const counter = Math.floor(Date.now() / 1000 / 30);
  const msg = Buffer.alloc(8);
  msg.writeBigUInt64BE(BigInt(counter));
  const hmac = crypto.createHmac('sha1', Buffer.from(bytes)).update(msg).digest();
  const offset = hmac[hmac.length - 1] & 0xf;
  const code = (hmac.readUInt32BE(offset) & 0x7fffffff) % 1_000_000;
  return String(code).padStart(6, '0');
}

module.exports = {
  PROJECT_DIR, UPLOAD_DIR, G, credentials, loadCredentials, credentialsFile, LOCAL_CREDENTIALS_FILE, CREDENTIAL_COLUMNS,
  KEY_FILE, encryptSecret, decryptSecret, isEncrypted, resetGlobals, loadProfile,
  nanoTime, containsIgnoreCase, formatDate, resource, createTimeStampedFile, copyFile, totpNow,
};
