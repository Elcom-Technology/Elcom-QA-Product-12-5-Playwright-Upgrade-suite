// Converted from Katalon test case: Test Cases/Latest_Testcases/TC9772 - Reject_Form_Workflow
// Original script: Scripts/Latest_Testcases/TC9772 - Reject_Form_Workflow/Script1723022262954.groovy
const { expect } = require('@playwright/test');
const { G, containsIgnoreCase } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Latest_Testcases/TC9769 - Create_Form_with_Workflow');
  // Same as TC9770: the Inbox link (href /workflow/workflowinbox.aspx) is hidden on the form
  // page after the submit, so open the Inbox page directly.
  await web.navigateToUrl(G.domainname.replace(/\/+$/, '') + '/workflow/workflowinbox.aspx');
  await web.setText('Latest test objects/Page_Workflow Inbox  Deployment Site/input_Keywords_MyWorkflowToApprovefilterText', G.CurrentFormNameWorkflow );
  await web.click('Latest test objects/Page_Workflow Inbox  Deployment Site/input_Display results per page_MyWorkflowTo_668dc6');
  await web.click('Latest test objects/Page_Workflow Inbox  Deployment Site/a_Form with Workflow2396656617543700 - Kata_83a706');
  await web.click('Latest test objects/Reject Workflow/Click Reject Workflow');
  let URL = await web.getUrl();
  console.log(('Print <<<<<<<<<<<<<<<<<<' + URL) + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(URL, 'workflow')).toBeTruthy();
};
