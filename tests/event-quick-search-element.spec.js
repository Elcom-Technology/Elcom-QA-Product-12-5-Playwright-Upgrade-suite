// Runs only Article Testcases/TC9746 - Event Quick Search Element. It logs in, creates
// an article in Elcom_Automation_Folder, adds an Event Quick Search element, publishes
// the article and checks the article name shows.
// Run: npx playwright test tests/event-quick-search-element.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9746 - Event Quick Search Element', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9746 - Event Quick Search Element');
});
