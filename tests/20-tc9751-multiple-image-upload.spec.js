// Upgrade Suite test 20. TC9751 - Multiple Image Upload
// It logs in, opens Image Manager's Upload Multiple Images tab, uploads time-stamped copies of
// Automation Image 1-3.png to Elcom_Automation_Folder with alt text, then searches for
// "Automation" and checks a result shows.
// Katalon test case: ImageManagerr_Testcases/TC9751 - Multiple Image Upload
// Run only this test: npx playwright test 20-tc9751-multiple-image-upload.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9751 - Multiple Image Upload', async ({ page }) => {
  await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9751 - Multiple Image Upload');
});
