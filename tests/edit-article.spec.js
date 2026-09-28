// Runs only Article Testcases/TC9756 - Edit article. It logs in, creates an article in
// Elcom_Automation_Folder with an end date, adds a Content Editor element and publishes,
// then edits the article attributes (a later end date) and publishes again.
// Run: npx playwright test tests/edit-article.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9756 - Edit article', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9756 - Edit article');
});
