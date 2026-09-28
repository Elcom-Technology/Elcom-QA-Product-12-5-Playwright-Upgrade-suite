// Converted from Katalon test case: Test Cases/Article Testcases/TC9743 - Add the taxonomy Search element
// Original script: Scripts/Article Testcases/TC9743 - Add the taxonomy Search element/Script1717762396527.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Articles Elements_Page_Objects/Taxonomy Search/Page_Article Attributes  Deployment Site/input__ctl00ContentPlaceHolderMainNoAjaxstr_06079a', 'Taxonomy Search Element' + nanoTime());
  await web.setText('Articles Elements_Page_Objects/Taxonomy Search/Page_Article Attributes  Deployment Site/input_elcom_automation_folder_ctl00ContentP_d351f3', '');
  await web.click('Articles Elements_Page_Objects/Taxonomy Search/Page_Article Attributes  Deployment Site/input_elcom_automation_folder_ctl00ContentP_d351f3');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Taxonomy Search/Page_Article Attributes  Deployment Site/a_Draft');
  await web.click('Articles Elements_Page_Objects/Taxonomy Search/Page_Select Content Template  Deployment Site/input_Opens in new window_ctl00ContentPlace_3f09f4');
  await web.click('Articles Elements_Page_Objects/Taxonomy Search/Page_Edit Article Taxonomy Search Element  _c766ac/a_Add');
  await web.click('Articles Elements_Page_Objects/Taxonomy Search/Page_Edit Article Taxonomy Search Element  _c766ac/li_All');
  await web.setText('Articles Elements_Page_Objects/Taxonomy Search/Page_Edit Article Taxonomy Search Element  _c766ac/input_Filter elements list_element-filter-field', 'tax');
  await web.click('Articles Elements_Page_Objects/Taxonomy Search/Page_Edit Article Taxonomy Search Element  _c766ac/span_Taxonomy Search');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Articles Elements_Page_Objects/Taxonomy Search/Page_Edit Article Taxonomy Search Element  _c766ac/div_Click to edit_hoverPlaceHolder', 'Articles Elements_Page_Objects/Search Article element/14 Click to Edit option in  search element/EditIcon');
  await web.setText('Articles Elements_Page_Objects/Taxonomy Search/Page_Edit Module  Deployment Site/input_Heading text_ctl07txtHeadingText', 'Taxonomy Search' + nanoTime());
  await web.click('Articles Elements_Page_Objects/Taxonomy Search/Page_Edit Module  Deployment Site/input_Disable_PublishButton');
  let Verify = await web.getText('Assertion_PageObjects/Verify Taxonamy Search');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Taxonomy Search")).toBeTruthy();
};
