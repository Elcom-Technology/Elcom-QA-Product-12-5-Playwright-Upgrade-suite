// Upgrade Suite test 31. TC9766 - Add_Folder_Via_QuickLink
// It logs in, makes sure Quick Add > Add Folder is switched on in Global Site Settings
// (TC9775), then on the site uses Quick Add > Add Folder to create
// "Elcom_QuickAdd_Folder<number>" under Elcom_Automation_Folder and checks the new folder name
// shows.
// Katalon test case: GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink
// Run only this test: npx playwright test 31-tc9766-add-folder-via-quicklink.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9766 - Add_Folder_Via_QuickLink', async ({ page }) => {
  await callTestCase(new WebUI(page), 'GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink');
});
