// Upgrade Suite test 33. TC9768 - Add Acknowledgement
// It logs in, creates an article in Elcom_Automation_Folder, adds an Acknowledge element
// (three acknowledgement texts), publishes it, clicks Acknowledge on the published page and
// checks the article shows.
// Katalon test case: Latest_Testcases/TC9768 - Add Acknowledgement
// Run only this test: npx playwright test 33-tc9768-add-acknowledgement.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9768 - Add Acknowledgement', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Latest_Testcases/TC9768 - Add Acknowledgement');
});
