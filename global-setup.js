// Runs once before the suite: resets the GlobalVariable values from the profile.
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const { resetGlobals, loadProfile } = require('./src/helpers');

module.exports = async () => {
  resetGlobals();
  const p = loadProfile();
  console.log(`Profile: ${process.env.PROFILE || 'default'}  url: ${p.url}  domain: ${p.domainname}`);
};
