// Runs only Recyclebin_Testcase/TC9761 - Recycle bin document manager. It logs in, opens
// the Recycle Bin, filters to documents named "Test", restores the first one, then
// searches Document Manager for that document and checks it is back.
// Needs a deleted document in the Recycle Bin - run
// tests/delete-document-not-in-use.spec.js first if there is none.
// Run: npx playwright test tests/delete-document-not-in-use.spec.js tests/recycle-bin-document-manager.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9761 - Recycle bin document manager', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Recyclebin_Testcase/TC9761 - Recycle bin document manager');
});
