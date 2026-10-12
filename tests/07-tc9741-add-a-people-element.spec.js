// Upgrade Suite test 7. TC9741 - Add a People element
// It logs in, creates an article in Elcom_Automation_Folder, adds a People element (selected
// group, last name first, email shown, 10 per page), publishes it and checks the article name
// shows.
// Katalon test case: Article Testcases/TC9741 - Add a People element
// Run only this test: npx playwright test 07-tc9741-add-a-people-element.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9741 - Add a People element', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9741 - Add a People element');
});
