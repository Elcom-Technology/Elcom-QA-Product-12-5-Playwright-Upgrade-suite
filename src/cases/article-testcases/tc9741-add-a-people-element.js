// Converted from Katalon test case: Test Cases/Article Testcases/TC9741 - Add a People element
// Original script: Scripts/Article Testcases/TC9741 - Add a People element/Script1718792359407.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', 'Add people Element' + nanoTime());
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'People Element');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Scroll and click on Continue/Click Continue');
  await web.click('Articles Elements_Page_Objects/people/Page_Edit Article People  Deployment Site/a_Add');
  await web.click('Articles Elements_Page_Objects/people/Page_Edit Article People  Deployment Site/li_All');
  await web.setText('Articles Elements_Page_Objects/people/Page_Edit Article People  Deployment Site/input_Filter elements list_element-filter-field', 'peopl');
  await web.click('Articles Elements_Page_Objects/people/Page_Edit Article People  Deployment Site/span_People');
  // Katalon's click landed on the "People / Click to edit" box that shows on hover;
  // in Playwright hover the element first, then click that box to open its settings.
  await web.mouseOver('Articles Elements_Page_Objects/people/Page_Edit Article People  Deployment Site/div_Click to edit_hoverPlaceHolder');
  await web.click('Articles Elements_Page_Objects/people/Page_Edit Article People  Deployment Site/ul_People Click to edit');
  await web.click('Articles Elements_Page_Objects/people/Page_Edit Module  Deployment Site/input_Selected Groups_ctl07DisplayType');
  await web.selectOptionByValue('Articles Elements_Page_Objects/people/Page_Edit Module  Deployment Site/select_AdministratorPublisherElcom SupportM_96a4bc', '1', true);
  await web.click('Articles Elements_Page_Objects/people/Page_Edit Module  Deployment Site/input_OR_ctl07LastNameFirst');
  await web.click('Articles Elements_Page_Objects/people/Page_Edit Module  Deployment Site/input_Last Name  First Name_ctl07Email');
  await web.setText('Articles Elements_Page_Objects/people/Page_Edit Module  Deployment Site/input_Display records per page_ctl07txtNoRecord', '10');
  await web.click('Articles Elements_Page_Objects/people/Page_Edit Module  Deployment Site/input_Display records per page_PublishButton');
  let Verify = await web.getText('Assertion_PageObjects/VerifyPeopleElement');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Add people Element")).toBeTruthy();
};
