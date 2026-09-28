// Runs only Latest_Testcases/TC9773 - Form_With_Form_Results. It logs in, creates an article
// with the calculator form (as TC9771) and publishes it, edits the article to add a Form
// Results element for that form, then submits the form with 1000 and 500.
// Run: npx playwright test tests/form-with-form-results.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9773 - Form_With_Form_Results', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Latest_Testcases/TC9773 - Form_With_Form_Results');
});
