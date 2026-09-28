// Runs only DocumentManager_TestCases/TC9754 - Add a document through regular upload. It
// logs in, opens Document Manager, uploads a time-stamped copy of "Test Automation
// doc.docx" to Elcom_Automation_Folder with a title and description, and checks the
// document shows.
// Run: npx playwright test tests/add-document-regular-upload.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9754 - Add a document through regular upload', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'DocumentManager_TestCases/TC9754 - Add a document through regular upload');
});
