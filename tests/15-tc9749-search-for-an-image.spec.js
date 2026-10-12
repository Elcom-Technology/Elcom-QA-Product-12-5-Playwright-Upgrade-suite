// Upgrade Suite test 15. TC9749 - Search for an image
// It logs in, opens Image Manager, searches for "KatalonTestImage" and checks a matching image
// shows. Needs at least one KatalonTestImage image on the site - run
// tests/add-image-regular-upload.spec.js first if there are none.
// Katalon test case: ImageManagerr_Testcases/TC9749 - Search for an image
// Run only this test: npx playwright test 15-tc9749-search-for-an-image.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9749 - Search for an image', async ({ page }) => {
  await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9749 - Search for an image');
});
