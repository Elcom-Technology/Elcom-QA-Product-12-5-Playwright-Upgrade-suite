// Converted from Katalon test case: Test Cases/Article Testcases/TC9756 - Edit article
// Original script: Scripts/Article Testcases/TC9756 - Edit article/Script1706096042615.groovy
const { nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', 'Test Article created to edit'+ nanoTime());
  await web.setText('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/a_Publishing Date and Time');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxblnN_5a5784');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_popupButton');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/a_31');
  await web.delay(3);
  await web.executeJavaScript('window.scrollTo(0, 0);', null);
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnS_dfc885');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Edit Article Test Article created to e_c5e0a5/a_Add');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Edit Article Test Article created to e_c5e0a5/span_Content Editor');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Edit Article Test Article created to e_c5e0a5/a_Publish');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Test Article created to edit - Elcom_A_8f2ebc/a_Article Attributes');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/a_Publishing Date and Time');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_popupButton');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/aEndDate_calendar_NN');
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/a_31');
  await web.delay(3);
  await web.executeJavaScript('window.scrollTo(0, 0);', null);
  await web.click('Articles Elements_Page_Objects/Edit Article/Page_Article Attributes - Elcom_Automation__77e2de/a_Publish');
};
