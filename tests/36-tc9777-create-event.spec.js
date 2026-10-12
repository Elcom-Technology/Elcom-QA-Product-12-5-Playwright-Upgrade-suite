// Upgrade Suite test 36. TC9777 - Create Event
// It logs in, opens Maintain Events, adds an event "Katalon Test Event<number>" (location, end
// date 31/07/2027, online registration on), saves it, searches for it and opens it.
// Katalon test case: Latest_Testcases/TC9777 - Create Event
// Run only this test: npx playwright test 36-tc9777-create-event.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9777 - Create Event', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Latest_Testcases/TC9777 - Create Event');
});
