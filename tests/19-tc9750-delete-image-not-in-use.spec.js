// Upgrade Suite test 19. TC9750 - Delete image not in use
// It logs in, opens Image Manager, searches for "KatalonTestImage" and deletes the first
// result. Needs at least one KatalonTestImage image on the site - run
// tests/add-image-regular-upload.spec.js first if there are none.
// Katalon test case: ImageManagerr_Testcases/TC9750 - Delete image not in use
// Run only this test: npx playwright test 19-tc9750-delete-image-not-in-use.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9750 - Delete image not in use', async ({ page }) => {
  await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9750 - Delete image not in use');
});
