// Runs only DocumentManager_TestCases/TC9752 - Delete a document not in use. It logs in,
// opens Document Manager, searches for "Test Automation doc", checks the first result is
// marked "not in use" and deletes it.
// Needs at least one "Test Automation doc" document on the site - run
// tests/add-document-regular-upload.spec.js first if there are none.
// Run: npx playwright test tests/delete-document-not-in-use.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9752 - Delete a document not in use', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'DocumentManager_TestCases/TC9752 - Delete a document not in use');
});
