// Creates the encryption key used for the passwords in the login details Excel file.
// The key is never printed.
//
//   npm run create-key            - Windows: saves the key in your Windows user environment
//                                   as ELCOM_CREDENTIALS_KEY (restart VS Code afterwards).
//   npm run create-key -- --file  - saves it to C:\Users\<you>\ElcomAutomation\credentials.key
//                                   (or ELCOM_CREDENTIALS_KEY_FILE) instead.
//
// Never replaces an existing key: passwords encrypted with it would stop working.
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { KEY_FILE } = require('../src/helpers');

const useFile = process.argv.includes('--file') || process.platform !== 'win32';

if (process.env.ELCOM_CREDENTIALS_KEY) {
  console.log('ELCOM_CREDENTIALS_KEY is already set - not changed.');
  process.exit(0);
}
if (fs.existsSync(KEY_FILE)) {
  console.log(`Key file already exists, not changed: ${KEY_FILE}`);
  process.exit(0);
}

const key = crypto.randomBytes(32).toString('base64');
if (useFile) {
  fs.mkdirSync(path.dirname(KEY_FILE), { recursive: true });
  fs.writeFileSync(KEY_FILE, key + '\n', { mode: 0o600 });
  console.log(`Created key file: ${KEY_FILE}`);
} else {
  // setx writes to HKCU\Environment (this Windows user only). Output is hidden so the key is not shown.
  execFileSync('setx', ['ELCOM_CREDENTIALS_KEY', key], { stdio: 'ignore' });
  console.log('Saved the key in your Windows user environment variable ELCOM_CREDENTIALS_KEY.');
  console.log('Close and reopen VS Code (all terminals) so the tests can see it.');
}
console.log('Anyone running the tests on another machine needs the same key (share it securely).');
