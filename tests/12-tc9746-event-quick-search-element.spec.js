// Upgrade Suite test 12. TC9746 - Event Quick Search Element
// It logs in, creates an article in Elcom_Automation_Folder, adds an Event Quick Search
// element, publishes the article and checks the article name shows.
// Katalon test case: Article Testcases/TC9746 - Event Quick Search Element
// Run only this test: npx playwright test 12-tc9746-event-quick-search-element.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9746 - Event Quick Search Element', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9746 - Event Quick Search Element');
});
