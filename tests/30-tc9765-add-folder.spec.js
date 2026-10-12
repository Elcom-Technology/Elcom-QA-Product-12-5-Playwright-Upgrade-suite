// Upgrade Suite test 30. TC9765 - Add Folder
// It logs in, opens Publishing > Folders, adds a new folder "TestFolderQA<number>" under
// Elcom_Automation_Folder, and checks the new folder name shows on the page.
// Katalon test case: Folder_TestCases/TC9765 - Add Folder
// Run only this test: npx playwright test 30-tc9765-add-folder.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9765 - Add Folder', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Folder_TestCases/TC9765 - Add Folder');
});
