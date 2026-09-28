// Converted from Katalon test case: Test Cases/Common_TestCases/Login - site
// Written by hand: the Katalon version read the username, password and MFA secret
// from "Login Details - Abdul" (an Excel file on \\192.168.2.25\Common\QA\Katalon-Data).
// They come from an Excel file again - see loadCredentials in src/helpers.js for which one.
const { G, credentials, loadCredentials, totpNow } = require('../../helpers');

const LOGIN = 'Common_TestCases_PageObjects/Page_Login - Other - v12 Development Site';

module.exports = async function run(web) {
  const { file } = await loadCredentials();
  await web.openBrowser('');
  await web.maximizeWindow();
  await web.navigateToUrl(G.url);

  // Enter username and password
  await web.setText(`${LOGIN}/USerNameFIeld`, credentials.username);
  await web.setEncryptedText(`${LOGIN}/PasswordField`, credentials.password);
  const loginPage = await web.getUrl();
  await web.click(`${LOGIN}/LoginButton`);
  await web.page.waitForURL((u) => u.href !== loginPage, { timeout: 30000 }).catch(() => {});

  // MFA login, only when the site asks for it
  const latesturl = await web.getUrl();
  console.log(latesturl);
  if (latesturl.includes('TwoFactorCheck')) {
    if (!credentials.totpSecret) throw new Error(`The site asked for MFA but there is no totpsecret in ${file}`);
    const otp = totpNow(credentials.totpSecret);
    await web.setText('MFA Page/Code', otp);
    await web.click('MFA Page/Check Code Button');
    console.log('Logged into MFA');
  } else {
    console.log('Site Logged into Without MFA');
  }
};
