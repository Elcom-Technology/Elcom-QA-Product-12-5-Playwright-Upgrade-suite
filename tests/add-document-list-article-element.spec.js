// Runs only Article Testcases/TC9739 - Add a Document List article element. It logs
// in, creates an article in Elcom_Automation_Folder, adds a Document List element
// (100 documents, File Icon and File Name fields, current folder included), publishes
// it and checks "Type File" shows.
// Run: npx playwright test tests/add-document-list-article-element.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9739 - Add a Document List article element', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9739 - Add a Document List article element');
});
