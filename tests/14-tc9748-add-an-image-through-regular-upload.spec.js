// Upgrade Suite test 14. TC9748 - Add an image through regular upload
// It logs in, opens Image Manager, uploads a time-stamped copy of KatalonTestImage2.jpg to
// Elcom_Automation_Folder with alt text, and checks the image name shows.
// Katalon test case: ImageManagerr_Testcases/TC9748 - Add an image through regular upload
// Run only this test: npx playwright test 14-tc9748-add-an-image-through-regular-upload.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9748 - Add an image through regular upload', async ({ page }) => {
  await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9748 - Add an image through regular upload');
});
