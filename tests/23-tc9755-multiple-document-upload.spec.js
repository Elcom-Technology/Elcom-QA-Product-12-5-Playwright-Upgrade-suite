// Upgrade Suite test 23. TC9755 - Multiple document Upload
// It logs in, opens Document Manager's multiple upload tab, uploads time-stamped copies of
// Test Automation Doc 1-3.docx to Elcom_Automation_Folder with descriptions, then searches for
// "Test Automation Doc" and checks a result shows.
// Katalon test case: DocumentManager_TestCases/TC9755 - Multiple document Upload
// Run only this test: npx playwright test 23-tc9755-multiple-document-upload.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9755 - Multiple document Upload', async ({ page }) => {
  await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9755 - Multiple document Upload');
});
