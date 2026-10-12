// Converted from Katalon test case: Test Cases/GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS
// Original script: Scripts/GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS/Script1727243231600.groovy
const { expect } = require('@playwright/test');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/i_Logout_fa fa-bars');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/span_Admin', 'GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/span_Global Site Settings');
  // The Katalon script used the Quick Add *Event* checkbox (chkShowQuickAddEvent) here; this test
  // is about Quick Add *Folder*, so it uses chkShowQuickAddFolder.
  const GSS = 'GlobalSiteSettings_Objects/Page_Global Site Settings  Deployment Site/';
  const folderBox = () => web.page.locator('#chkShowQuickAddFolder');
  // The Quick Add section is collapsed when the page opens (and again after each save).
  const openQuickAdd = async () => {
    if (!(await folderBox().isVisible())) await web.click(GSS + 'a_Quick Add');
    await folderBox().waitFor({ state: 'visible', timeout: 30 * 1000 });
  };
  const save = async () => {
    await web.click(GSS + 'a_Save');
    await web.verifyTextPresent('The Global Site Settings have been updated successfully.', false);
  };

  await openQuickAdd();
  // The option is normally already on, which meant the original test never enabled anything.
  // Switch it off first so every run really enables it.
  if (await folderBox().isChecked()) {
    await folderBox().uncheck();
    await save();
    await openQuickAdd();
    await expect(folderBox(), 'Show Add Folder is off before enabling').not.toBeChecked();
  }
  // Enable Quick Add > Add Folder and save.
  await folderBox().check();
  await save();
  // Reload Global Site Settings and check the option was saved as enabled.
  await web.page.goto(web.page.url());
  await openQuickAdd();
  await expect(folderBox(), 'Show Add Folder is enabled in Global Site Settings').toBeChecked();
  console.log('Print <<<<<<<<<<<<<<<<<< Quick Add > Show Add Folder is enabled in Global Site Settings >>>>>>>>>>>>>>>>>>>>>>>>>>>>');
};
