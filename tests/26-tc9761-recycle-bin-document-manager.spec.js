// Upgrade Suite test 26. TC9761 - Recycle bin document manager
// It logs in, opens the Recycle Bin, filters to documents named "Test", restores the first
// one, then searches Document Manager for that document and checks it is back. Needs a deleted
// document in the Recycle Bin - run tests/delete-document-not-in-use.spec.js first if there is
// none.
// Katalon test case: Recyclebin_Testcase/TC9761 - Recycle bin document manager
// Run only this test: npx playwright test 26-tc9761-recycle-bin-document-manager.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9761 - Recycle bin document manager', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Recyclebin_Testcase/TC9761 - Recycle bin document manager');
});
