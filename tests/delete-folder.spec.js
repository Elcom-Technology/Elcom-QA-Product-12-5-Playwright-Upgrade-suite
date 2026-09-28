// Runs only Folder_TestCases/TC9764 - Delete Folder. It logs in, adds a new folder
// "TestFolderThen<number>" under Elcom_Automation_Folder, checks it is the selected folder,
// deletes it and checks its name is gone from the page.
// Run: npx playwright test tests/delete-folder.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9764 - Delete Folder', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Folder_TestCases/TC9764 - Delete Folder');
});
