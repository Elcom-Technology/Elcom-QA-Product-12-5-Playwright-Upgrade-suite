// Upgrade Suite test 17. TC9754 - Add a document through regular upload
// It logs in, opens Document Manager, uploads a time-stamped copy of "Test Automation
// doc.docx" to Elcom_Automation_Folder with a title and description, and checks the document
// shows.
// Katalon test case: DocumentManager_TestCases/TC9754 - Add a document through regular upload
// Run only this test: npx playwright test 17-tc9754-add-a-document-through-regular-upload.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9754 - Add a document through regular upload', async ({ page }) => {
  await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9754 - Add a document through regular upload');
});
