// Converted from Katalon test case: Test Cases/Latest_Testcases/TC9774 - Forgot password link and verify
// Original script: Scripts/Latest_Testcases/TC9774 - Forgot password link and verify/Script1722507537946.groovy
const { expect } = require('@playwright/test');
const { G } = require('../../helpers');

module.exports = async function run(web) {
  await web.openBrowser('');
  await web.maximizeWindow();
  await web.navigateToUrl(G.url);
  await web.click('Latest test objects/Page_Login  Deployment Site/a_Forgot password');
  await web.setText('Latest test objects/Page_Forgotten Password  Deployment Site/input_Email Address_ctl00ContentPlaceHolder_e4618b', 'helpdesk@elcom.com.au');
  await web.click('Latest test objects/Page_Forgotten Password  Deployment Site/input_User Name_ctl00ContentPlaceHolderMain_d3e310');
  await web.click('Latest test objects/Page_Forgotten Password  Deployment Site/div_Back to site                           _e25191');
  let latesturl = await web.getUrl();
  console.log(('Print>>>>>>>>>>>>>' + latesturl) + '>>>>>>>>>>>>>');
  if (latesturl.includes('forgottenpassword'))
    expect(true).toBeTruthy();
  else {
    expect(false).toBeTruthy();
  }
};
