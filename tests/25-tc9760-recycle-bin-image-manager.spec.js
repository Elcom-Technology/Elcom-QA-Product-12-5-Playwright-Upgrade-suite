// Upgrade Suite test 25. TC9760 - Recycle bin image manager
// It logs in, opens the Recycle Bin, filters to images named "KatalonTestImage", selects them
// and restores. Needs a deleted KatalonTestImage image in the Recycle Bin - run
// tests/delete-image-not-in-use.spec.js first if there is none.
// Katalon test case: Recyclebin_Testcase/TC9760 - Recycle bin image manager
// Run only this test: npx playwright test 25-tc9760-recycle-bin-image-manager.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9760 - Recycle bin image manager', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Recyclebin_Testcase/TC9760 - Recycle bin image manager');
});
