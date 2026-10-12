// Upgrade Suite test 21. TC9759 - Restore a document to previous version
// Runs only DocumentManager_TestCases/TC9759 - Restore a document to previous version. It logs
// in, opens Document Manager, finds a "Test Automation doc" document, renames its title to
// "Test Automation doc - EDIT", publishes, then restores the previous version from History.
// Needs at least one "Test Automation doc" document on the site - run
// tests/add-document-regular-upload.spec.js first if there are none.
// Katalon test case: DocumentManager_TestCases/TC9759 - Restore a document to previous version
// Run only this test: npx playwright test 21-tc9759-restore-a-document-to-previous-version.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9759 - Restore a document to previous version', async ({ page }) => {
  await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9759 - Restore a document to previous version');
});
