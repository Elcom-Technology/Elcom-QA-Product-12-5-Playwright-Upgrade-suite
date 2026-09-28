// Runs only Folder_TestCases/TC9765 - Add Folder. It logs in, opens Publishing > Folders,
// adds a new folder "TestFolderThen<number>" under Elcom_Automation_Folder, and checks the
// new folder name shows on the page.
// Run: npx playwright test tests/add-folder.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9765 - Add Folder', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Folder_TestCases/TC9765 - Add Folder');
});
