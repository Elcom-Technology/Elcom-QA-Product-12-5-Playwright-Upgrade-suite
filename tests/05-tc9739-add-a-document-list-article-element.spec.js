// Upgrade Suite test 5. TC9739 - Add a Document List article element
// It logs in, creates an article in Elcom_Automation_Folder, adds a Document List element (100
// documents, File Icon and File Name fields, current folder included), publishes it and checks
// "Type File" shows.
// Katalon test case: Article Testcases/TC9739 - Add a Document List article element
// Run only this test: npx playwright test 05-tc9739-add-a-document-list-article-element.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9739 - Add a Document List article element', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9739 - Add a Document List article element');
});
