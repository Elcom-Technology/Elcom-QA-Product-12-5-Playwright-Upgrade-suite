// Converted from Katalon test case: Test Cases/Article Testcases/TC9737 - Add a Comment Article element
// Original script: Scripts/Article Testcases/TC9737 - Add a Comment Article element/Script1706094402179.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Articles Elements_Page_Objects/Comments Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', 'Comment Article'+ nanoTime());
  await web.setText('Articles Elements_Page_Objects/Comments Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnS_dfc885');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Article Harsha comment - Elcom_Au_2b035a/a_Add');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Article Harsha comment - Elcom_Au_2b035a/li_All');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Article Harsha comment - Elcom_Au_2b035a/span_Comments');
  if (await web.verifyElementPresent('Articles Elements_Page_Objects/Comments Article/Page_Edit Article Harsha comment - Elcom_Au_2b035a/ackbutton' , 0, 'OPTIONAL')) {
    await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Article Harsha comment - Elcom_Au_2b035a/ackbutton' );
  } else {
    await web.print('No accept cookies available for the site');
  }
  await web.mouseOver('Articles Elements_Page_Objects/Comments Article/Page_Edit Article Harsha comment - Elcom_Au_2b035a/Mouse over to edit comments article');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Article Harsha comment - Elcom_Au_2b035a/ul_Comments                                _481f10');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07chkAllowPagination');
  await web.setText('Articles Elements_Page_Objects/Comments Article/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07txtNumberPerPage', '10');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07chkShowProfilePic');
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_ctl07chkEnableCommentVotes');
  await web.sleep(4000);
  await web.click('Articles Elements_Page_Objects/Comments Article/Page_Edit Module - Elcom_Automation_Folder _1a3284/input_PublishButton');
  await web.sleep(3000);
  let Verify = await web.getText('Assertion_PageObjects/VerifyCommenttext');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Comments")).toBeTruthy();
};
