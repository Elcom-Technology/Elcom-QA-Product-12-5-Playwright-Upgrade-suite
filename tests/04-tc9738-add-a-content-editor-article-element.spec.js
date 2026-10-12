// Upgrade Suite test 4. TC9738 - Add a Content Editor Article element
// It logs in, creates an article in Elcom_Automation_Folder, adds a Content Editor element
// with some text, publishes it and checks "Content Editor" shows.
// Katalon test case: Article Testcases/TC9738 - Add a Content Editor Article element
// Run only this test: npx playwright test 04-tc9738-add-a-content-editor-article-element.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9738 - Add a Content Editor Article element', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9738 - Add a Content Editor Article element');
});
