// Converted from Katalon test case: Test Cases/Latest_Testcases/TC9768 - Add Acknowledgement
// Original script: Scripts/Latest_Testcases/TC9768 - Add Acknowledgement/Script1723532938129.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Latest test objects/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', 'Add a Acknowledgement ' + nanoTime());
  await web.setText('Latest test objects/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Latest test objects/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.click('Latest test objects/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1');
  await web.click('Latest test objects/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Acknowledgement Element');
  await web.click('Latest test objects/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Latest test objects/Page_Select Content Template  Deployment Site/input_Opens in new window_ctl00ContentPlace_3f09f4');
  await web.click('Latest test objects/Page_Edit Article Add a Acknowledgement 298_dfe2ba/a_Add');
  await web.setText('Latest test objects/Page_Edit Article Add a Acknowledgement 298_dfe2ba/input_Filter elements list_element-filter-field', '');
  await web.click('Latest test objects/Page_Edit Article Add a Acknowledgement 298_dfe2ba/li_Acknowledge');
  await web.click('Latest test objects/Page_Edit Article Add a Acknowledgement 298_dfe2ba/a_Acknowledge                              _210c4b');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Click to edit', 'Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/editthis');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/a_Display (1) (1)');
  await web.switchToFrame('Latest test objects/Page_Edit Module  Deployment Site/legend_Acknowledgement Text (1)', 60);
  await web.setText('Latest test objects/Form result Mouseover/Body in Frame/HTML Body', 'This is Sample 1');
  await web.switchToDefaultContent();
  await web.switchToFrame('Latest test objects/Page_Edit Module  Deployment Site/main_Rules            Display              _b38105 (1)', 60);
  await web.setText('Latest test objects/Form result Mouseover/Body in Frame/HTML Body', 'This is Sample 2');
  await web.switchToDefaultContent();
  await web.switchToFrame('Latest test objects/Page_Edit Module  Deployment Site/main_Rules            Display              _b38105_1', 60);
  await web.setText('Latest test objects/Form result Mouseover/Body in Frame/HTML Body', 'This is Sample 3');
  await web.switchToDefaultContent();
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Cancel_PublishButton (1) (1)');
  await web.click('Latest test objects/Page_Add a Acknowledgement 2996523422783300_701165/button_Acknowledge');
  await web.refresh();
  let Verify = await web.getText('Assertion_PageObjects/Verify Acknowledgement');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Add a Acknowledgement")).toBeTruthy();
};
