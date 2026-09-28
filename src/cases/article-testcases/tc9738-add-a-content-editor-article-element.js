// Converted from Katalon test case: Test Cases/Article Testcases/TC9738 - Add a Content Editor Article element
// Original script: Scripts/Article Testcases/TC9738 - Add a Content Editor Article element/Script1701172634593.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Go to Maintain Article page/Enter the article name as Content Editor 001');
  await web.setText('Common Article_Forms_Page_Objects/Publishing Folder/Go to Maintain Article page/Enter the article name as Content Editor 001', 'Elcom Test Content Editor' + nanoTime());
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Click on User Friendly URL/user friendly URL is set');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Scroll to Click on Draft in Mainatain Article page/Click Draft');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Scroll and click on Continue/Click Continue');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Scroll and go to add icon/Click Add icon');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Select Content editor/Click Content Editor');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Under Common Tab Content editor element is displayed/Content editor is displayed');
  await web.switchToFrame('Common Article_Forms_Page_Objects/Publishing Folder/Write the Text in the content editor/Content', 5);
  await web.setText('Common Article_Forms_Page_Objects/Publishing Folder/Write the Text in the content editor/Body', 'This is a test');
  await web.switchToDefaultContent();
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Go to Publish button in the content editor/Mouse over the publish button');
  let Verify = await web.getText('Assertion_PageObjects/Content Editor Verify');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Content Editor")).toBeTruthy();
};
