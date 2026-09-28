// Converted from Katalon test case: Test Cases/Article Testcases/TC9746 - Event Quick Search Element
// Original script: Scripts/Article Testcases/TC9746 - Event Quick Search Element/Script1716802989498.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Articles Elements_Page_Objects/Event quick search/Page_Article Attributes  Deployment Site/input__ctl00ContentPlaceHolderMainNoAjaxstr_06079a', 'Event Quick search'+ nanoTime());
  await web.setText('Articles Elements_Page_Objects/Event quick search/Page_Article Attributes  Deployment Site/input_elcom_automation_folderharsha-article_1a8e45', '');
  await web.click('Articles Elements_Page_Objects/Event quick search/Page_Article Attributes  Deployment Site/input_elcom_automation_folderharsha-article_1a8e45');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Event quick search/Page_Article Attributes  Deployment Site/a_Draft');
  await web.click('Articles Elements_Page_Objects/Event quick search/Page_Select Content Template  Deployment Site/input_Opens in new window_ctl00ContentPlace_3f09f4');
  await web.click('Articles Elements_Page_Objects/Event quick search/Page_Edit Article Event/a_Add');
  await web.click('Articles Elements_Page_Objects/Event quick search/Page_Edit Article Event/li_All');
  await web.setText('Articles Elements_Page_Objects/Event quick search/Page_Edit Article Event/input_Filter elements list_element-filter-field', 'event');
  await web.executeJavaScript('window.scrollTo(0, 600);', null);
  await web.click('Articles Elements_Page_Objects/Event quick search/Page_Edit Article Event/span_Event Quick Search');
  await web.click('Articles Elements_Page_Objects/Event quick search/Page_Edit Article Event/PublishButton');
  await web.executeJavaScript('window.scrollTo(0, 600);', null);
  let Verify = await web.getText('Assertion_PageObjects/VerifyEventQuickSearch');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Event Quick search")).toBeTruthy();
};
