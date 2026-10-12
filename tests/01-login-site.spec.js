// Upgrade Suite test 1. Login - site
// Checks the login and MFA work against the site in the current profile.
// Katalon test case: Common_TestCases/Login - site
// Run only this test: npx playwright test 01-login-site.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('Login - site', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Common_TestCases/Login - site');
});
