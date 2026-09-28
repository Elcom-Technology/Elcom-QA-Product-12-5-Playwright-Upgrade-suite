// Runs only Latest_Testcases/TC9777 - Create Event. It logs in, opens Maintain Events, adds
// an event "Katalon Test  Event<number>" (location, end date 31/07/2027, online registration
// on), saves it, searches for it and opens it.
// Run: npx playwright test tests/create-event.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9777 - Create Event', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Latest_Testcases/TC9777 - Create Event');
});
