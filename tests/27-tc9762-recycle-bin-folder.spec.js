// Upgrade Suite test 27. TC9762 - Recycle bin Folder
// It logs in, creates a new folder with an article in it, deletes the folder, restores it from
// the Recycle Bin, then searches for the folder and checks it is back.
// Katalon test case: Recyclebin_Testcase/TC9762 - Recycle bin Folder
// Run only this test: npx playwright test 27-tc9762-recycle-bin-folder.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9762 - Recycle bin Folder', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Recyclebin_Testcase/TC9762 - Recycle bin Folder');
});
