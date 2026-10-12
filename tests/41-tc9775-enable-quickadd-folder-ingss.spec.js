// Upgrade Suite test 41. TC9775 - Enable_QuickAdd_Folder_InGSS
// It logs in, opens Admin > Global Site Settings > Quick Add, switches on Add Folder if it is
// off, saves and checks "The Global Site Settings have been updated successfully."
// Katalon test case: GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS
// Run only this test: npx playwright test 41-tc9775-enable-quickadd-folder-ingss.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9775 - Enable_QuickAdd_Folder_InGSS', async ({ page }) => {
  await callTestCase(new WebUI(page), 'GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS');
});
