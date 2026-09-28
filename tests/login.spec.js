// Runs only the login step (Common_TestCases/Login - site), to check the login and MFA
// work against the site in the current profile.
// Run: npx playwright test tests/login.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('Login - site', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Common_TestCases/Login - site');
});
