// Upgrade Suite test 8. TC9742 - Add a Search Article element
// It logs in, creates an article in Elcom_Automation_Folder, adds a Search element
// (description shown, searching articles), publishes it and checks the article name shows.
// Katalon test case: Article Testcases/TC9742 - Add a Search Article element
// Run only this test: npx playwright test 08-tc9742-add-a-search-article-element.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9742 - Add a Search Article element', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9742 - Add a Search Article element');
});
