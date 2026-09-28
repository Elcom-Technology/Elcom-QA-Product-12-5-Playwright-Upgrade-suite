// Converted from Katalon test case: Test Cases/GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS
// Original script: Scripts/GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS/Script1727243231600.groovy

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/i_Logout_fa fa-bars');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/span_Admin', 'GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/span_Global Site Settings');
  await web.click('GlobalSiteSettings_Objects/Page_Global Site Settings  Deployment Site/a_Quick Add');
  if (await web.verifyElementNotChecked('GlobalSiteSettings_Objects/Page_Global Site Settings  Deployment Site/input_Show Add Meeting_ctl00ContentPlaceHol_b68327', 5, 'OPTIONAL')) {
    await web.click('GlobalSiteSettings_Objects/Page_Global Site Settings  Deployment Site/input_Show Add Meeting_ctl00ContentPlaceHol_b68327');
  } else {
    await web.getUrl();
  }
  await web.click('GlobalSiteSettings_Objects/Page_Global Site Settings  Deployment Site/a_Save');
  await web.verifyTextPresent('The Global Site Settings have been updated successfully.', false);
};
