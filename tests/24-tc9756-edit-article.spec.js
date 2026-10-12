// Upgrade Suite test 24. TC9756 - Edit article
// It logs in, creates an article in Elcom_Automation_Folder with an end date, adds a Content
// Editor element and publishes, then edits the article attributes (a later end date) and
// publishes again.
// Katalon test case: Article Testcases/TC9756 - Edit article
// Run only this test: npx playwright test 24-tc9756-edit-article.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9756 - Edit article', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9756 - Edit article');
});
