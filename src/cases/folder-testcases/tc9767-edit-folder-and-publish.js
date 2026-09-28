// Converted from Katalon test case: Test Cases/Folder_TestCases/TC9767 - Edit Folder And Publish
// Original script: Scripts/Folder_TestCases/TC9767 - Edit Folder And Publish/Script1705573462790.groovy
const { G } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Folder_TestCases/TC9765 - Add Folder');
  await web.click('Folder_PageObjects/Edit Folder/span_Search');
  await web.switchToWindowIndex(1);
  await web.click('Folder_PageObjects/Page_FolderSearch/a_Folder Search');
  await web.setText('Folder_PageObjects/Page_FolderSearch/input_Keywords_txtFolderKeywords', G.foldername);
  await web.click('Folder_PageObjects/Page_FolderSearch/input_Premium Content_ctl05');
  await web.click('Folder_PageObjects/Page_FolderSearch/a_TestFolder15955133699900');
  await web.click('Folder_PageObjects/Page_FolderSearch/input_TestFolder15955133699900_ctl06');
  await web.switchToWindowIndex(0);
  await web.rightClick('Folder_PageObjects/Add Folder/ClickFolder');
  await web.waitForElementClickable('Folder_PageObjects/Add Folder/span_Edit Folder', 30);
  await web.click('Folder_PageObjects/Add Folder/span_Edit Folder');
  await web.setText('Folder_PageObjects/Edit Folder/input_UserFriendlyURL', G.foldername + 'updated1');
  await web.click('Folder_PageObjects/Edit Folder/a_Check In');
  await web.closeBrowser();
};
