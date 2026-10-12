// Upgrade Suite test 6. TC9740 - Add a Dynamic widget
// It logs in, creates an article in Elcom_Automation_Folder, adds a Dynamic Widget element
// (articles and documents, 50 items, start dates shown), publishes it and checks "Dynamic
// widget" shows.
// Katalon test case: Article Testcases/TC9740 - Add a Dynamic widget
// Run only this test: npx playwright test 06-tc9740-add-a-dynamic-widget.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9740 - Add a Dynamic widget', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9740 - Add a Dynamic widget');
});
