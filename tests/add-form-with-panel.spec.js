// Runs only Form Test cases/TC9747 - Add a Form with Panel. It logs in, creates an
// article in Elcom_Automation_Folder, adds a Form element with a panel and fields, sets
// the email options, publishes it and checks the article name shows.
// Run: npx playwright test tests/add-form-with-panel.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9747 - Add a Form with Panel', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Form Test cases/TC9747 - Add a Form with Panel');
});
