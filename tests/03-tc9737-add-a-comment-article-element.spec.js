// Upgrade Suite test 3. TC9737 - Add a Comment Article element
// It logs in, creates an article in Elcom_Automation_Folder, adds a Comments element
// (pagination, profile pictures and comment votes on), publishes it and checks "Comments"
// shows.
// Katalon test case: Article Testcases/TC9737 - Add a Comment Article element
// Run only this test: npx playwright test 03-tc9737-add-a-comment-article-element.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9737 - Add a Comment Article element', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9737 - Add a Comment Article element');
});
