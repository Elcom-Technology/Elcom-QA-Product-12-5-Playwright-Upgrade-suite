// Runs only Recyclebin_Testcase/TC9762 - Recycle bin Folder. It logs in, creates a new
// folder with an article in it, deletes the folder, restores it from the Recycle Bin,
// then searches for the folder and checks it is back.
// Run: npx playwright test tests/recycle-bin-folder.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9762 - Recycle bin Folder', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Recyclebin_Testcase/TC9762 - Recycle bin Folder');
});
