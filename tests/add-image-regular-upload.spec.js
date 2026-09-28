// Runs only ImageManagerr_Testcases/TC9748 - Add an image through regular upload. It
// logs in, opens Image Manager, uploads a time-stamped copy of KatalonTestImage2.jpg to
// Elcom_Automation_Folder with alt text, and checks the image name shows.
// Run: npx playwright test tests/add-image-regular-upload.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9748 - Add an image through regular upload', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'ImageManagerr_Testcases/TC9748 - Add an image through regular upload');
});
