// Runs only DocumentManager_TestCases/TC9753 - Search for a document. It logs in, opens
// Document Manager, searches for "Test Automation doc" and checks a matching document shows.
// Needs at least one "Test Automation doc" document on the site - run
// tests/add-document-regular-upload.spec.js first if there are none.
// Run: npx playwright test tests/search-for-a-document.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9753 - Search for a document', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'DocumentManager_TestCases/TC9753 - Search for a document');
});
