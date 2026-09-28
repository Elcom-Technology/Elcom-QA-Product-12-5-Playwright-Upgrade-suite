// Converted from Katalon test case: Test Cases/Article Testcases/TC9736 - Deactivate Article
// Original script: Scripts/Article Testcases/TC9736 - Deactivate Article/Script1720074889539.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Article_PageObjects/Activate Article/Page_Article Attributes  Deployment Site/input__ctl00ContentPlaceHolderMainNoAjaxstr_06079a', 'Article to deactivate' + nanoTime());
  await web.setText('Article_PageObjects/Activate Article/Page_Article Attributes  Deployment Site/input_elcom_automation_folderharsha-article_1a8e45', '');
  await web.click('Article_PageObjects/Activate Article/Page_Article Attributes  Deployment Site/input_elcom_automation_folderharsha-article_1a8e45');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Article_PageObjects/Activate Article/Page_Article Attributes  Deployment Site/a_Draft');
  await web.click('Article_PageObjects/Activate Article/Page_Select Content Template  Deployment Site/input_Opens in new window_ctl00ContentPlace_3f09f4');
  await web.click('Article_PageObjects/Activate Article/Page_Edit Article Article to decativate  De_533e05/a_Add');
  await web.click('Article_PageObjects/Activate Article/Page_Edit Article Article to decativate  De_533e05/span_Content Editor');
  await web.click('Article_PageObjects/Activate Article/Page_Edit Article Article to decativate  De_533e05/a_Publish');
  await web.click('Article_PageObjects/Activate Article/Page_Article to decativate  Deployment Site/a_Folder');
  await web.click('Article_PageObjects/Activate Article/Page_Manage Folders and Articles  Deployment Site/span_Deactivate');
  let Verify = await web.getText('Assertion_PageObjects/Inactive text verify');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Inactive")).toBeTruthy();
};
