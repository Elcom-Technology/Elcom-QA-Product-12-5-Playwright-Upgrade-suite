// Runs only Article Testcases/TC9742 - Add a Search Article element. It logs in,
// creates an article in Elcom_Automation_Folder, adds a Search element (description
// shown, searching articles), publishes it and checks the article name shows.
// Run: npx playwright test tests/add-search-article-element.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9742 - Add a Search Article element', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9742 - Add a Search Article element');
});
