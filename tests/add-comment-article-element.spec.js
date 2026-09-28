// Runs only Article Testcases/TC9737 - Add a Comment Article element. It logs in,
// creates an article in Elcom_Automation_Folder, adds a Comments element (pagination,
// profile pictures and comment votes on), publishes it and checks "Comments" shows.
// Run: npx playwright test tests/add-comment-article-element.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9737 - Add a Comment Article element', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9737 - Add a Comment Article element');
});
