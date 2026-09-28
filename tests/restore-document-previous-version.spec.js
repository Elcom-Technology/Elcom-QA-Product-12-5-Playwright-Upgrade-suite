// Runs only DocumentManager_TestCases/TC9759 - Restore a document to previous version.
// It logs in, opens Document Manager, finds a "Test Automation doc" document, renames its
// title to "Test Automation doc - EDIT", publishes, then restores the previous version
// from History.
// Needs at least one "Test Automation doc" document on the site - run
// tests/add-document-regular-upload.spec.js first if there are none.
// Run: npx playwright test tests/restore-document-previous-version.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9759 - Restore a document to previous version', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'DocumentManager_TestCases/TC9759 - Restore a document to previous version');
});
