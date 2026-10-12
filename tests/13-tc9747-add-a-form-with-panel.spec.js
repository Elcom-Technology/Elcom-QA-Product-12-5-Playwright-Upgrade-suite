// Upgrade Suite test 13. TC9747 - Add a Form with Panel
// It logs in, creates an article in Elcom_Automation_Folder, adds a Form element with a panel
// and fields, sets the email options, publishes it and checks the article name shows.
// Katalon test case: Form Test cases/TC9747 - Add a Form with Panel
// Run only this test: npx playwright test 13-tc9747-add-a-form-with-panel.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9747 - Add a Form with Panel', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Form Test cases/TC9747 - Add a Form with Panel');
});
