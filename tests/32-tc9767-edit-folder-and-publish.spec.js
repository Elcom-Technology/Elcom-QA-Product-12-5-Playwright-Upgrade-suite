// Upgrade Suite test 32. TC9767 - Edit Folder And Publish
// It first runs TC9765 - Add Folder (new folder "TestFolderQA<number>"), finds that folder
// with Folder Search, opens Edit Folder, changes its user friendly URL to "<folder
// name>updated1" and checks it in.
// Katalon test case: Folder_TestCases/TC9767 - Edit Folder And Publish
// Run only this test: npx playwright test 32-tc9767-edit-folder-and-publish.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9767 - Edit Folder And Publish', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Folder_TestCases/TC9767 - Edit Folder And Publish');
});
