// Upgrade Suite test 22. TC9752 - Delete a document not in use
// It logs in, opens Document Manager, searches for "Test Automation doc", checks the first
// result is marked "not in use" and deletes it. Needs at least one "Test Automation doc"
// document on the site - run tests/add-document-regular-upload.spec.js first if there are
// none.
// Katalon test case: DocumentManager_TestCases/TC9752 - Delete a document not in use
// Run only this test: npx playwright test 22-tc9752-delete-a-document-not-in-use.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9752 - Delete a document not in use', async ({ page }) => {
  await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9752 - Delete a document not in use');
});
