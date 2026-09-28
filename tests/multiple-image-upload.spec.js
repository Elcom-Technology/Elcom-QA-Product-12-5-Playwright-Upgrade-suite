// Runs only ImageManagerr_Testcases/TC9751 - Multiple Image Upload. It logs in, opens
// Image Manager's Upload Multiple Images tab, uploads time-stamped copies of
// Automation Image 1-3.png to Elcom_Automation_Folder with alt text, then searches for
// "Automation" and checks a result shows.
// Run: npx playwright test tests/multiple-image-upload.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9751 - Multiple Image Upload', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'ImageManagerr_Testcases/TC9751 - Multiple Image Upload');
});
