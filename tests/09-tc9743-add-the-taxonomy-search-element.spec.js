// Upgrade Suite test 9. TC9743 - Add the taxonomy Search element
// It logs in, creates an article in Elcom_Automation_Folder, adds a Taxonomy Search element
// with a heading, publishes it and checks "Taxonomy Search" shows.
// Katalon test case: Article Testcases/TC9743 - Add the taxonomy Search element
// Run only this test: npx playwright test 09-tc9743-add-the-taxonomy-search-element.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9743 - Add the taxonomy Search element', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9743 - Add the taxonomy Search element');
});
