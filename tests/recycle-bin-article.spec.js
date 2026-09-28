// Runs only Recyclebin_Testcase/TC9763 - Recycle bin Article. It logs in, creates a new
// folder with an article in it, deletes the article, restores it from the Recycle Bin,
// then searches for the article and checks it is back.
// Run: npx playwright test tests/recycle-bin-article.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9763 - Recycle bin Article', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Recyclebin_Testcase/TC9763 - Recycle bin Article');
});
