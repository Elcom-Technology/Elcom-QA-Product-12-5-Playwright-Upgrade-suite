// Upgrade Suite test 35. TC9770 - Approve_Form_Workflow
// It first runs TC9769 - Create_Form_with_Workflow (new form + workflow, form submitted), then
// opens the workflow Inbox, filters it to that form, opens the submission and approves it.
// Katalon test case: Latest_Testcases/TC9770 - Approve_Form_Workflow
// Run only this test: npx playwright test 35-tc9770-approve-form-workflow.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9770 - Approve_Form_Workflow', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Latest_Testcases/TC9770 - Approve_Form_Workflow');
});
