// Upgrade Suite test 11. TC9745 - Delete Article
// It logs in, creates an article in Elcom_Automation_Folder, then deletes it.
// Katalon test case: Article Testcases/TC9745 - Delete Article
// Run only this test: npx playwright test 11-tc9745-delete-article.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9745 - Delete Article', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9745 - Delete Article');
});
