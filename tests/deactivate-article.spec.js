// Runs only Article Testcases/TC9736 - Deactivate Article. It logs in, creates an
// article in Elcom_Automation_Folder, publishes it, then deactivates it and checks
// the status shows "Inactive".
// Run: npx playwright test tests/deactivate-article.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9736 - Deactivate Article', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Article Testcases/TC9736 - Deactivate Article');
});
