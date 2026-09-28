// Converted from Katalon test case: Test Cases/Common Testcases _Articles_Forms/Folder Creation - Add Article
// Original script: Scripts/Common Testcases _Articles_Forms/Folder Creation - Add Article/Script1717994872141.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Security_TestCases/Login');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Backend admin page/burger menu click');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Navigate to Publishing/Click Publishing');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Naviagte to publishing Folders/Click Folders');
  await web.click('Folder_PageObjects/SearchFolder/Search_Option');
  await web.switchToWindowIndex(1);
  await web.click('Folder_PageObjects/SearchFolder/FolderTab_Switch');
  await web.setText('Folder_PageObjects/SearchFolder/FolderSearchBox', 'Elcom_Automation_Folder');
  await web.click('Folder_PageObjects/SearchFolder/SearchButton');
  await web.waitForElementPresent('Folder_PageObjects/SearchFolder/Result_ElcomAutomationFolder', 5);
  await web.click('Folder_PageObjects/SearchFolder/Result_ElcomAutomationFolder');
  await web.click('Folder_PageObjects/SearchFolder/CloseButton');
  await web.switchToWindowIndex(0);
  await web.click('Articles Elements_Page_Objects/Create article/Page_Manage Folders and Articles  Deployment Site/Subfolder');
  await web.click('Articles Elements_Page_Objects/Create article/Page_Manage Folders and Articles  Deployment Site/span_Add Article');
  // The Article Attributes page can be slow to load on the dev server - wait for it
  // instead of reading the title while the page is still blank.
  await expect.poll(() => web.getWindowTitle().catch(() => ''), { timeout: 60 * 1000 }).toMatch(/Article Attributes/i);
  let AttributesText = await web.getWindowTitle();
  console.log('Print <<<<<<<<<<<<<<<<<<' + AttributesText+ '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(AttributesText, "Article")).toBeTruthy();
};
