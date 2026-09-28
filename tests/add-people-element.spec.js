// Runs only Article Testcases/TC9741 - Add a People element. It logs in, creates an
// article in Elcom_Automation_Folder, adds a People element (selected group, last name
// first, email shown, 10 per page), publishes it and checks the article name shows.
// Run: npx playwright test tests/add-people-element.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9741 - Add a People element', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9741 - Add a People element');
});
