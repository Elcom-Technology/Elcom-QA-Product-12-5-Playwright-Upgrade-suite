// Converted from Katalon test case: Test Cases/Article Testcases/TC9740 - Add a Dynamic widget
// Original script: Scripts/Article Testcases/TC9740 - Add a Dynamic widget/Script1707736623287.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Articles Elements_Page_Objects/Dynamic widget article element/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', 'Dynamic widget'+ nanoTime());
  await web.setText('Articles Elements_Page_Objects/Dynamic widget article element/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element (1)/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnS_dfc885');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Article Dynamic widget - Elcom_Au_d35a12/a_Add');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Article Dynamic widget - Elcom_Au_d35a12/li_Common');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Article Dynamic widget - Elcom_Au_d35a12/ALL_Option' );
  await web.setText('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Article Dynamic widget - Elcom_Au_d35a12/Inputfield' ,'Dynamic Widget');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Article Dynamic widget - Elcom_Au_d35a12/DynamicWidgetOption' );
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Articles Elements_Page_Objects/Dynamic widget article element/1 Mouse over dynamic widget/DynamicWidgetMouseHHover', 'Articles Elements_Page_Objects/Dynamic widget article element/2 Click to edit for dynamic widget/Click to edit in Dynamic widget');
  await web.setText('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07ctl00txtWidgetName', 'Test Dynamic widget1'+ nanoTime());
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07ctl00blnShowArticles');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07ctl00blnShowDocuments');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07ctl00RadIncludeExclude');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/a_Overall Look and Feel');
  await web.setText('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07ctl00txtNoOfWidgetItems', '50');
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/a_Item Display Settings');
  await web.selectOptionByValue('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/select_Dont display dateDisplay Start DateD_7957df', 'SS', true);
  await web.selectOptionByValue('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/select_Dont display dateDisplay Start DateD_7957df_1', 'SS', true);
  await web.click('Articles Elements_Page_Objects/Dynamic widget article element/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_PublishButton');
  let Verify = await web.getText('Assertion_PageObjects/VerifyDynamicWidget');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Dynamic widget")).toBeTruthy();
};
