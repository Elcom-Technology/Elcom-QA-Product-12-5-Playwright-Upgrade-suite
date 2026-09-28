// Creates the team's encryption key file on the R drive (network share, VPN only).
// Where: "credentialskeyfile" in profiles/<PROFILE>.json, or ELCOM_CREDENTIALS_KEY_FILE in .env.
// The key is never printed and is not stored on this machine.
// Run once for the whole team: npm run create-key
//
// If you already made a key earlier as the Windows variable ELCOM_CREDENTIALS_KEY, this moves that
// key into the file, so the password already encrypted in the Excel keeps working.
// Never replaces an existing key file: passwords encrypted with it would stop working.
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { keyFile } = require('../src/helpers');

const file = keyFile();
if (fs.existsSync(file)) {
  console.log(`Key file already exists, not changed: ${file}`);
  process.exit(0);
}
if (!fs.existsSync(path.dirname(file))) {
  console.error(`Folder not reachable: ${path.dirname(file)}\nConnect to the VPN and try again.`);
  process.exit(1);
}
const oldKey = (process.env.ELCOM_CREDENTIALS_KEY || '').trim();
const key = oldKey && Buffer.from(oldKey, 'base64').length === 32 ? oldKey : crypto.randomBytes(32).toString('base64');
fs.writeFileSync(file, key + '\n');
console.log(`Created key file: ${file}`);
if (oldKey) {
  console.log('It holds the key from your ELCOM_CREDENTIALS_KEY variable, so the encrypted password still works.');
  console.log('You can now remove that variable (PowerShell):');
  console.log('  [Environment]::SetEnvironmentVariable("ELCOM_CREDENTIALS_KEY", $null, "User")');
} else {
  console.log('Now run "npm run encrypt-password" and put the ENC:v1:... text in the password cell.');
}
