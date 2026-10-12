// Upgrade Suite test 29. TC9757 - Add New User with group
// It logs in, adds a new user (email TestEmail<random>@elcom.com.au), adds it to a group, then
// searches for that user and checks its email. The new user's username and password come from
// the "Add new user with group" sheet of the login details Excel file on the R drive (see
// README "Login details"); the password must be encrypted. Connect to the VPN first.
// Katalon test case: Security_TestCases/TC9757 - Add New User with group
// Run only this test: npx playwright test 29-tc9757-add-new-user-with-group.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9757 - Add New User with group', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Security_TestCases/TC9757 - Add New User with group');
});
