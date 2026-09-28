// Runs only ImageManagerr_Testcases/TC9750 - Delete image not in use. It logs in, opens
// Image Manager, searches for "KatalonTestImage" and deletes the first result.
// Needs at least one KatalonTestImage image on the site - run
// tests/add-image-regular-upload.spec.js first if there are none.
// Run: npx playwright test tests/delete-image-not-in-use.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9750 - Delete image not in use', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'ImageManagerr_Testcases/TC9750 - Delete image not in use');
});
