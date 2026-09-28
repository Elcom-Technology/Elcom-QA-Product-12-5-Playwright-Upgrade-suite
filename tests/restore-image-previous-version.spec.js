// Runs only ImageManagerr_Testcases/TC9758 - Restore an image to previous version. It
// logs in, opens Image Manager, finds a "KatalonTestImage" image, renames its title to
// "KatalonTestImage- Edit", publishes, then restores the previous version from History.
// Needs at least one KatalonTestImage image on the site - run
// tests/add-image-regular-upload.spec.js first if there are none.
// Run: npx playwright test tests/restore-image-previous-version.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9758 - Restore an image to previous version', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'ImageManagerr_Testcases/TC9758 - Restore an image to previous version');
});
