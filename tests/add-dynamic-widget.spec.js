// Runs only Article Testcases/TC9740 - Add a Dynamic widget. It logs in, creates an
// article in Elcom_Automation_Folder, adds a Dynamic Widget element (articles and
// documents, 50 items, start dates shown), publishes it and checks "Dynamic widget" shows.
// Run: npx playwright test tests/add-dynamic-widget.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9740 - Add a Dynamic widget', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9740 - Add a Dynamic widget');
});
