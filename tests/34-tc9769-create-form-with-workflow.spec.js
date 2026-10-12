// Upgrade Suite test 34. TC9769 - Create_Form_with_Workflow
// It logs in, creates an article in Elcom_Automation_Folder with a form (panel + three fields)
// and publishes it, then creates a workflow "MaintainFormWorkflow<number>" for that form
// (managers: Administrators, System, Web Master; basket "Manager"), opens the form, submits it
// and checks the workflow shows. TC9770 - Approve_Form_Workflow and TC9772 -
// Reject_Form_Workflow use the form and workflow this test creates, so run this first.
// Katalon test case: Latest_Testcases/TC9769 - Create_Form_with_Workflow
// Run only this test: npx playwright test 34-tc9769-create-form-with-workflow.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9769 - Create_Form_with_Workflow', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Latest_Testcases/TC9769 - Create_Form_with_Workflow');
});
