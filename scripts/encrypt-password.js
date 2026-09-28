// Asks for a password (hidden, typed twice) and prints it encrypted as ENC:v1:... so it can
// be pasted into the password cell of the login details Excel file. Needs the key made by
// "npm run create-key". The password itself is never printed or saved.
// Run: npm run encrypt-password
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const readline = require('readline');
const { encryptSecret, decryptSecret } = require('../src/helpers');

function askHidden(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    rl.stdoutMuted = false;
    rl._writeToOutput = (s) => { if (!rl.stdoutMuted) rl.output.write(s); };
    rl.question(question, (answer) => { rl.output.write('\n'); rl.close(); resolve(answer); });
    rl.stdoutMuted = true;
  });
}

(async () => {
  if (!process.stdin.isTTY) {
    console.error('Run this in a terminal so the password can be typed without showing it.');
    process.exit(1);
  }
  const first = await askHidden('Password to encrypt: ');
  const second = await askHidden('Type it again: ');
  if (!first) { console.error('No password entered.'); process.exit(1); }
  if (first !== second) { console.error('The two entries do not match - nothing encrypted.'); process.exit(1); }
  const encrypted = encryptSecret(first);
  if (decryptSecret(encrypted) !== first) { console.error('Self-check failed - nothing encrypted.'); process.exit(1); }
  console.log('\nPut this in the password cell of the login details file:\n');
  console.log(encrypted);
})();
