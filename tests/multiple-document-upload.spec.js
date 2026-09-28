// Runs only DocumentManager_TestCases/TC9755 - Multiple document Upload. It logs in,
// opens Document Manager's multiple upload tab, uploads time-stamped copies of Test
// Automation Doc 1-3.docx to Elcom_Automation_Folder with descriptions, then searches for
// "Test Automation Doc" and checks a result shows.
// Run: npx playwright test tests/multiple-document-upload.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9755 - Multiple document Upload', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'DocumentManager_TestCases/TC9755 - Multiple document Upload');
});
