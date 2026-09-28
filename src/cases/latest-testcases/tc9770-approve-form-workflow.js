// Converted from Katalon test case: Test Cases/Latest_Testcases/TC9770 - Approve_Form_Workflow
// Original script: Scripts/Latest_Testcases/TC9770 - Approve_Form_Workflow/Script1723020466812.groovy
const { expect } = require('@playwright/test');
const { G, containsIgnoreCase } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Latest_Testcases/TC9769 - Create_Form_with_Workflow');
  // The Inbox link (href /workflow/workflowinbox.aspx) is hidden on the form page after the
  // submit, so open the Inbox page directly.
  await web.navigateToUrl(G.domainname.replace(/\/+$/, '') + '/workflow/workflowinbox.aspx');
  await web.setText('Latest test objects/Page_Workflow Inbox  Deployment Site/input_Keywords_MyWorkflowToApprovefilterText', G.CurrentFormNameWorkflow );
  await web.click('Latest test objects/Page_Workflow Inbox  Deployment Site/input_Display results per page_MyWorkflowTo_668dc6');
  await web.click('Latest test objects/Page_Workflow Inbox  Deployment Site/a_Form with Workflow2396656617543700 - Kata_83a706');
  await web.click('Latest test objects/Page_Elcom_Sub_Folder  Deployment Site/input_Name of the form_ctl00ctl00ctl00neste_d916a8');
  let URL = await web.getUrl();
  console.log(('Print <<<<<<<<<<<<<<<<<<' + URL) + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(URL, 'workflow')).toBeTruthy();
};
