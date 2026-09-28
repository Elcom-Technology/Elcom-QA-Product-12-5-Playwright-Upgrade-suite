// Runs only Article Testcases/TC9744 - Create a Folder Explorer. It logs in, creates an
// article in Elcom_Automation_Folder, adds a Folder Explorer element pointing at
// Elcom_Sub_Folder (articles and documents, all folder and content actions on), and
// checks "Folder Explorer" shows.
// Run: npx playwright test tests/create-folder-explorer.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9744 - Create a Folder Explorer', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9744 - Create a Folder Explorer');
});
