// Upgrade Suite test 40. TC9774 - Forgot password link and verify
// It opens the login page, clicks "Forgot password", submits the form for
// helpdesk@elcom.com.au, clicks "Back to site" and checks the address. Submitting the form may
// email a reset link to that address.
// Katalon test case: Latest_Testcases/TC9774 - Forgot password link and verify
// Run only this test: npx playwright test 40-tc9774-forgot-password-link-and-verify.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9774 - Forgot password link and verify', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Latest_Testcases/TC9774 - Forgot password link and verify');
});
