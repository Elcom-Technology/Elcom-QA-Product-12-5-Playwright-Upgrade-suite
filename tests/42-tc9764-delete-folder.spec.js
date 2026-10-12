// Upgrade Suite test 42. TC9764 - Delete Folder
// It logs in, adds a new folder "TestFolderQA<number>" under Elcom_Automation_Folder, checks
// it is the selected folder, deletes it and checks its name is gone from the page.
// Katalon test case: Folder_TestCases/TC9764 - Delete Folder
// Run only this test: npx playwright test 42-tc9764-delete-folder.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9764 - Delete Folder', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Folder_TestCases/TC9764 - Delete Folder');
});
