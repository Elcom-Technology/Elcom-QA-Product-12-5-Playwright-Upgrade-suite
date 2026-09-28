// Converted from Katalon test case: Test Cases/Article Testcases/TC9745 - Delete Article
// Original script: Scripts/Article Testcases/TC9745 - Delete Article/Script1706096405471.groovy
const { nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  let DeleteArtcile = await web.setText('Articles Elements_Page_Objects/Delete Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', 'Test Article to Add and Delete' + nanoTime());
  console.log(('Print >>>>>>>>>>>>>>>>>>>>>' + DeleteArtcile) + '>>>>>>>>>>>>>>>>>>>>>>');
  await web.setText('Articles Elements_Page_Objects/Delete Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Articles Elements_Page_Objects/Delete Article/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Delete Article/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Articles Elements_Page_Objects/Delete Article/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnS_dfc885');
  await web.click('Articles Elements_Page_Objects/Delete Article/Page_Edit Article Test Article to Add and D_abb44c/a_Add');
  await web.click('Articles Elements_Page_Objects/Delete Article/Page_Edit Article Test Article to Add and D_abb44c/span_Content Editor');
  await web.click('Articles Elements_Page_Objects/Delete Article/Page_Edit Article Test Article to Add and D_abb44c/a_Publish');
  await web.click('Articles Elements_Page_Objects/Delete Article/Page_Test Article to Add and Delete - Elcom_9ecc60/a_Delete');
  await web.click('Articles Elements_Page_Objects/Delete Article/Page_Test Article to Add and Delete - Elcom_9ecc60/input_ctl00ctl00ctl00ctl14deleteArticleModa_d29ceb');
};
