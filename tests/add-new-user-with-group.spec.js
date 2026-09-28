// Runs only Security_TestCases/TC9757 - Add New User with group. It logs in, adds a new
// user (TestUsername<random> / TestEmail<random>@elcom.com.au), adds it to a group, then
// searches for that user and checks its email.
// The new user's password comes from "newuserpassword" in the login details file, or is a
// random one made for the run when the file has none.
// Run: npx playwright test tests/add-new-user-with-group.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9757 - Add New User with group', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Security_TestCases/TC9757 - Add New User with group');
});
