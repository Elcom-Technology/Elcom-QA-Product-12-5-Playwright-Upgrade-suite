// Runs only Latest_Testcases/TC9768 - Add Acknowledgement. It logs in, creates an article
// in Elcom_Automation_Folder, adds an Acknowledge element (three acknowledgement texts),
// publishes it, clicks Acknowledge on the published page and checks the article shows.
// Run: npx playwright test tests/add-acknowledgement.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9768 - Add Acknowledgement', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Latest_Testcases/TC9768 - Add Acknowledgement');
});
