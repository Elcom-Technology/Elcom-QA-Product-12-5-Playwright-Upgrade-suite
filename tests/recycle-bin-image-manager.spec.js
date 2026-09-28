// Runs only Recyclebin_Testcase/TC9760 - Recycle bin image manager. It logs in, opens
// the Recycle Bin, filters to images named "KatalonTestImage", selects them and restores.
// Needs a deleted KatalonTestImage image in the Recycle Bin - run
// tests/delete-image-not-in-use.spec.js first if there is none.
// Run: npx playwright test tests/recycle-bin-image-manager.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9760 - Recycle bin image manager', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Recyclebin_Testcase/TC9760 - Recycle bin image manager');
});
