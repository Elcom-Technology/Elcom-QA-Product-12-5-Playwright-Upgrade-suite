// Runs only Article Testcases/TC9743 - Add the taxonomy Search element. It logs in,
// creates an article in Elcom_Automation_Folder, adds a Taxonomy Search element with a
// heading, publishes it and checks "Taxonomy Search" shows.
// Run: npx playwright test tests/add-taxonomy-search-element.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9743 - Add the taxonomy Search element', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9743 - Add the taxonomy Search element');
});
