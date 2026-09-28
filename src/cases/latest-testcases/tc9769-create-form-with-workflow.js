// Converted from Katalon test case: Test Cases/Latest_Testcases/TC9769 - Create_Form_with_Workflow
// Original script: Scripts/Latest_Testcases/TC9769 - Create_Form_with_Workflow/Script1767701017622.groovy
const { expect } = require('@playwright/test');
const { G, containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  let FormNameWorkflow = 'Form with Workflow' + nanoTime();
  G.CurrentFormNameWorkflow = FormNameWorkflow;
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', FormNameWorkflow);
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Create a form with Workflow' + nanoTime());
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnS_dfc885');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/PlusButton');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Form');
  // Same as TC9747: hover the form element, then click its "Click to edit" (a plain click on
  // the element does not open its settings in Playwright).
  await web.hoverAndJsClick('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Click to edit', 'Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/editthis');
  // 5s (as in Katalon) is too short for the form settings page on the dev server.
  if (await web.verifyElementPresent('Form_Page_Objects/Forms Object/Form with Panel/CreateForm', 30, 'OPTIONAL')) {
    await web.page.waitForLoadState('networkidle').catch(() => {});
    // Create Form updates the page in place (no new page load); the designer then reloads its
    // data. Wait for that (GetExistingFields) so Form Items clicks are not lost.
    const designerReady = web.page.waitForResponse((r) => /GetExistingFields/i.test(r.url()), { timeout: 60 * 1000 });
    await web.click('Form_Page_Objects/Forms Object/Form with Panel/CreateForm', 'OPTIONAL');
    await designerReady;
    await web.delay(1);
  } else {
    await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Module - Elcom_Automation_Folder _1a3284/i_fa fa-font');
  }
  // The form designer loads its data after the page opens; a click on "New Panel" before that
  // finishes does nothing.
  await web.page.waitForLoadState('networkidle').catch(() => {});
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/a_New Panel');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/a_New Panel 1');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Module - Elcom_Automation_Folder _1a3284/i_fa fa-font');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Module - Elcom_Automation_Folder _1a3284/i_fa fa-list-ul');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Module - Elcom_Automation_Folder _1a3284/i_fa fa-list-alt');
  // The designer must hold exactly one panel and one of each field (labels in the design area
  // are in title case; the Form Items list uses "Single line text" / "Checkbox list").
  const designer = web.page.locator('#ctl07_ctl07_easyformMain');
  await expect(designer.getByText('New Panel 2', { exact: true }), 'only one panel in the form').toHaveCount(0);
  await expect(designer.getByText('Single Line Text', { exact: true }), 'one Single Line Text field').toHaveCount(1);
  await expect(designer.getByText('Checkbox List', { exact: true }), 'one Checkbox List field').toHaveCount(1);
  // "Save Designer Changes" saves the form, then the designer reloads it in place (no new page
  // load, so waiting for "networkidle" does not help). Clicking Publish before that reload has
  // finished makes the site save the fields a second time - every field ends up twice on the
  // published form. Wait for the reload (GetExistingFields) before publishing.
  const reloaded = web.page.waitForResponse((r) => /GetExistingFields/i.test(r.url()), { timeout: 60 * 1000 });
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07ctl07easyCommit');
  await reloaded;
  await web.delay(2);
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_PublishButton');
  await web.page.waitForURL((u) => !/EditModule\.aspx/i.test(u.href), { timeout: 60 * 1000 });
  let url = await web.getUrl();
  await web.navigateToUrl(url);
  await web.click('Workflow_PageObjects/Page_Welcome to your site - Home - v12 Deve_04d2dc/a_Dashboard');
  await web.click('Workflow_PageObjects/Page_Administration Dashboard - Other - v12_344637/span_Workflow');
  await web.click('Workflow_PageObjects/Page_Administration Dashboard - Other - v12_344637/span_Maintain Workflows');
  await web.click('Workflow_PageObjects/Page_Maintain Workflows - Other - v12 Devel_d8cf15/input_Workflows_ctl00ContentPlaceHolderMain_b8588e');
  let WorkflowName = 'MaintainFormWorkflow' + nanoTime();
  G.CurrentWorkflowName = WorkflowName;
  await web.setText('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input__ctl00ContentPlaceHolderMainNoAjaxtxt_8a9f5f', WorkflowName);
  await web.setText('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/textarea__ctl00ContentPlaceHolderMainNoAjax_545add', 'Katalon Test');
  await web.click('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input__ctl00ContentPlaceHolderMainNoAjaxblnActive');
  await web.selectOptionByIndex('Workflow_PageObjects/Event type select/select Events', 3);
  await web.setText('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input__ctl00ContentPlaceHolderMainNoAjaxtxt_ee46c4', '10');
  await web.delay(3);
  await web.click('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/fieldset_Workflow Properties               _e1f5cd');
  await web.click('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/a_What This Workflow Applies To');
  await web.click('Latest test objects/Workflow maintain/Click Form list');
  await web.selectOptionByLabel('Latest test objects/Workflow maintain/Click Form list', G.CurrentFormNameWorkflow, false);
  await web.delay(3);
  await web.click('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/a_Who Will Manage This Workflow');
  await web.setText('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input_Choose Groups_ctl00ContentPlaceHolder_316abe', 'Administrators');
  // Wait for the matching search result, then click it (the Katalon steps clicked the first
  // list item straight away, which is not always the group that was typed).
  await web.waitForElementVisible('Workflow_PageObjects/Managing groups dropdown/li_Administrators', 30);
  await web.click('Workflow_PageObjects/Managing groups dropdown/li_Administrators');
  await web.click('Workflow_PageObjects/Click Add button Object/Click Administrator');
  await web.delay(3);
  await web.setText('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input_Choose Groups_ctl00ContentPlaceHolder_316abe', 'System');
  await web.waitForElementVisible('Workflow_PageObjects/Managing groups dropdown/li_System', 30);
  await web.click('Workflow_PageObjects/Managing groups dropdown/li_System');
  await web.click('Workflow_PageObjects/Click Add button Object/Click Administrator');
  await web.setText('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input_Choose user - type text, then enter f_8480c8','web master');
  await web.waitForElementVisible('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input_Choose user - type text, then enter f_8480c8', 3);
  await web.setText('Workflow_PageObjects/Workflow Manager Name/Workflow Manager', 'Web Master');
  await web.waitForElementVisible('Workflow_PageObjects/Select Webmaster/li_Web Master', 30);
  await web.click('Workflow_PageObjects/Select Webmaster/li_Web Master');
  await web.scrollToElement('Workflow_PageObjects/Workflow_Save Btn/a_Save', 2);
  await web.click('Workflow_PageObjects/Click Workflow object/a_Workflow Baskets');
  await web.click('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input_Workflow Baskets_Name not found');
  // Selecting the basket opens its editor, which resets the basket fields once it has loaded;
  // text typed before then is lost ("Please specify a name of the selected basket").
  // Wait for it to settle, then type the name and make sure it stayed.
  await web.page.waitForLoadState('networkidle').catch(() => {});
  await web.delay(1);
  const basketName = 'Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input__ctl00ContentPlaceHolderMainNoAjaxtxt_3c3bd3';
  await expect.poll(async () => {
    if ((await (await web.find(basketName)).inputValue()) !== 'Manager') await web.setText(basketName, 'Manager');
    await web.delay(1);
    return (await web.find(basketName)).inputValue();
  }, { timeout: 30 * 1000 }).toBe('Manager');
  await web.selectOptionByLabel('Workflow_PageObjects/Workflow basket/Select Basket owner', 'Web Master', false);
  await web.setText('Workflow_PageObjects/Page_Maintain Workflows - Settings - Other _dfa11d/input__ctl00ContentPlaceHolderMainNoAjaxtxt_435212', '5');
  await web.executeJavaScript('window.scrollTo(0, 1200);', null);
  await web.click('Workflow_PageObjects/Workflow_Save Btn/a_Save');
  await web.delay(3);
  await web.setText('Latest test objects/Workflow maintain/SearchField', G.CurrentWorkflowName );
  await web.click('Latest test objects/Workflow maintain/Click Search');
  if (await web.verifyElementPresent('Latest test objects/Workflow maintain/Pagination', 5, 'OPTIONAL')) {
    await web.click('Latest test objects/Workflow maintain/Pagination');
  } else {
    await web.setText('Latest test objects/Workflow maintain/SearchField' , G.CurrentWorkflowName );
  }
  await web.click('Latest test objects/Workflow maintain/SerachButton' );
  await web.click('Latest test objects/Workflow maintain/Click workflow page');
  // The form link opens in a new tab ("Click to view form in a new window/tab") - switch to it.
  await web.switchToWindowIndex(1);
  await web.waitForElementClickable('Latest test objects/Page_Form with Workflow  Deployment Site/input_Single Line Text_UserField1074_21939', 20);
  // The published form must have exactly one of each field (the site used to save them twice).
  for (const field of ['Single Line Text', 'Checkbox List', 'Dropdown']) {
    await expect(web.page.getByText(field, { exact: true }), 'one ' + field + ' on the published form').toHaveCount(1);
  }
  await web.setText('Latest test objects/Page_Form with Workflow  Deployment Site/input_Single Line Text_UserField1074_21939', 'Katalon Test Form');
  await web.executeJavaScript('window.scrollTo(0, 600);', null);
  await web.click('Latest test objects/Page_Form with Workflow  Deployment Site/input_Start typing to search_ctl00ctl00ctl0_401e56');
  await web.waitForAlert(30);
  await web.acceptAlert();
  await web.refresh();
  let Verify = await web.getText('Assertion_PageObjects/Verify form with workflow');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Workflow")).toBeTruthy();
};
