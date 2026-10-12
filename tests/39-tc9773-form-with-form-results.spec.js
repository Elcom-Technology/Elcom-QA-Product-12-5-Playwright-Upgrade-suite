// Upgrade Suite test 39. TC9773 - Form_With_Form_Results
// It logs in, creates an article with the calculator form (as TC9771) and publishes it, edits
// the article to add a Form Results element for that form, then submits the form with 1000 and
// 500.
// Katalon test case: Latest_Testcases/TC9773 - Form_With_Form_Results
// Run only this test: npx playwright test 39-tc9773-form-with-form-results.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9773 - Form_With_Form_Results', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Latest_Testcases/TC9773 - Form_With_Form_Results');
});
