// Upgrade Suite test 37. TC9771 - FormWithCalculator
// It logs in, creates an article in Elcom_Automation_Folder with a form (two text fields + a
// "Result" calculator field that adds them), publishes it, enters 500 and 300 on the published
// form and checks the result.
// Katalon test case: Latest_Testcases/TC9771 - FormWithCalculator
// Run only this test: npx playwright test 37-tc9771-formwithcalculator.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9771 - FormWithCalculator', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Latest_Testcases/TC9771 - FormWithCalculator');
});
