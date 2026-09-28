// Converted from Katalon test case: Test Cases/Article Testcases/TC9742 - Add a Search Article element
// Original script: Scripts/Article Testcases/TC9742 - Add a Search Article element/Script1702635345633.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Articles Elements_Page_Objects/Search Article element/7 Add Article name as Harsha Search/article name as Harsha Search', 'Search Article Element' + nanoTime());
  await web.click('Articles Elements_Page_Objects/Search Article element/8 Click on User Friendly URL/Click User friendly URL');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Search Article element/9 go to Draft in Maintain article page/Mouse over on Draft');
  await web.click('Articles Elements_Page_Objects/Search Article element/10 Click on continue/click on continue in define article layout');
  await web.click('Articles Elements_Page_Objects/Search Article element/11 Click on plus icon/click on plus icon to add search element');
  await web.click('Articles Elements_Page_Objects/Search Article element/12 Mouse over and go to Search article element/select search article element');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Articles Elements_Page_Objects/Search Article element/14 Click to Edit option in  search element/MouseOverSearch', 'Articles Elements_Page_Objects/Search Article element/14 Click to Edit option in  search element/EditIcon');
  await web.click('Articles Elements_Page_Objects/Search Article element/15 Click Description checkbox/input_Display the following for each result_select Description');
  await web.click('Articles Elements_Page_Objects/Search Article element/16 Move up and click on Items to search/a_Items to Search');
  await web.click('Articles Elements_Page_Objects/Search Article element/17 Under Items to search click on Articles/select Articles checkbox');
  await web.click('Articles Elements_Page_Objects/Search Article element/18 Scroll and click on Publish/Click PublishButton');
  let Verify = await web.getText('Assertion_PageObjects/Verify Search Element');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Search Article Element")).toBeTruthy();
};
