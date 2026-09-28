// Runs only Article Testcases/TC9738 - Add a Content Editor Article element. It logs
// in, creates an article in Elcom_Automation_Folder, adds a Content Editor element with
// some text, publishes it and checks "Content Editor" shows.
// Run: npx playwright test tests/add-content-editor-article-element.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9738 - Add a Content Editor Article element', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9738 - Add a Content Editor Article element');
});
