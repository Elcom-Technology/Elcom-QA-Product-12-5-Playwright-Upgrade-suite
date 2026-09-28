// Runs only GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink. It logs in,
// makes sure Quick Add > Add Folder is switched on in Global Site Settings (TC9775), then on
// the site uses Quick Add > Add Folder to create "Elcom_QuickAdd_Folder<number>" under
// Elcom_Automation_Folder and checks the new folder name shows.
// Run: npx playwright test tests/add-folder-via-quicklink.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9766 - Add_Folder_Via_QuickLink', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink');
});
