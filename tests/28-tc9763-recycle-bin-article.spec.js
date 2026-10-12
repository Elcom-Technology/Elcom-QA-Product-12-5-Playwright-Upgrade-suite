// Upgrade Suite test 28. TC9763 - Recycle bin Article
// It logs in, creates a new folder with an article in it, deletes the article, restores it
// from the Recycle Bin, then searches for the article and checks it is back.
// Katalon test case: Recyclebin_Testcase/TC9763 - Recycle bin Article
// Run only this test: npx playwright test 28-tc9763-recycle-bin-article.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9763 - Recycle bin Article', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Recyclebin_Testcase/TC9763 - Recycle bin Article');
});
