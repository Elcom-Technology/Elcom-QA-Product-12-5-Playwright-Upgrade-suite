// Upgrade Suite test 2. TC9736 - Deactivate Article
// It logs in, creates an article in Elcom_Automation_Folder, publishes it, then deactivates it
// and checks the status shows "Inactive".
// Katalon test case: Article Testcases/TC9736 - Deactivate Article
// Run only this test: npx playwright test 02-tc9736-deactivate-article.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9736 - Deactivate Article', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9736 - Deactivate Article');
});
