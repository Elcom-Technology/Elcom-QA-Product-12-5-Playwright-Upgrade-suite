// Runs only Latest_Testcases/TC9771 - FormWithCalculator. It logs in, creates an article in
// Elcom_Automation_Folder with a form (two text fields + a "Result" calculator field that adds
// them), publishes it, enters 500 and 300 on the published form and checks the result.
// Run: npx playwright test tests/form-with-calculator.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9771 - FormWithCalculator', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Latest_Testcases/TC9771 - FormWithCalculator');
});
