// Runs only Latest_Testcases/TC9770 - Approve_Form_Workflow. It first runs TC9769 -
// Create_Form_with_Workflow (new form + workflow, form submitted), then opens the workflow
// Inbox, filters it to that form, opens the submission and approves it.
// Run: npx playwright test tests/approve-form-workflow.spec.js --headed
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9770 - Approve_Form_Workflow', async ({ page }) => {
  const web = new WebUI(page);
  await callTestCase(web, 'Latest_Testcases/TC9770 - Approve_Form_Workflow');
});
