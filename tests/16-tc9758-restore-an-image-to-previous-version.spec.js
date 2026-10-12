// Upgrade Suite test 16. TC9758 - Restore an image to previous version
// It logs in, opens Image Manager, finds a "KatalonTestImage" image, renames its title to
// "KatalonTestImage- Edit", publishes, then restores the previous version from History. Needs
// at least one KatalonTestImage image on the site - run tests/add-image-regular-upload.spec.js
// first if there are none.
// Katalon test case: ImageManagerr_Testcases/TC9758 - Restore an image to previous version
// Run only this test: npx playwright test 16-tc9758-restore-an-image-to-previous-version.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9758 - Restore an image to previous version', async ({ page }) => {
  await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9758 - Restore an image to previous version');
});
