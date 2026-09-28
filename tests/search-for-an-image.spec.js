// Runs only ImageManagerr_Testcases/TC9749 - Search for an image. It logs in, opens
// Image Manager, searches for "KatalonTestImage" and checks a matching image shows.
// Needs at least one KatalonTestImage image on the site - run
// tests/add-image-regular-upload.spec.js first if there are none.
// Run: npx playwright test tests/search-for-an-image.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9749 - Search for an image', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'ImageManagerr_Testcases/TC9749 - Search for an image');
});
