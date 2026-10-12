// Upgrade Suite test 18. TC9753 - Search for a document
// It logs in, opens Document Manager, searches for "Test Automation doc" and checks a matching
// document shows. Needs at least one "Test Automation doc" document on the site - run
// tests/add-document-regular-upload.spec.js first if there are none.
// Katalon test case: DocumentManager_TestCases/TC9753 - Search for a document
// Run only this test: npx playwright test 18-tc9753-search-for-a-document.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9753 - Search for a document', async ({ page }) => {
  await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9753 - Search for a document');
});
