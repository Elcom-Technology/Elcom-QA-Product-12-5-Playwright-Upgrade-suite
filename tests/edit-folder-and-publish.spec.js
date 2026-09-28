// Runs only Folder_TestCases/TC9767 - Edit Folder And Publish. It first runs TC9765 - Add
// Folder (new folder "TestFolderThen<number>"), finds that folder with Folder Search, opens
// Edit Folder, changes its user friendly URL to "<folder name>updated1" and checks it in.
// Run: npx playwright test tests/edit-folder-and-publish.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9767 - Edit Folder And Publish', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Folder_TestCases/TC9767 - Edit Folder And Publish');
});
