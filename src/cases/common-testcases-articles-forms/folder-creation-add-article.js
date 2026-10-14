// Converted from Katalon test case: Test Cases/Common Testcases _Articles_Forms/Folder Creation - Add Article
// Original script: Scripts/Common Testcases _Articles_Forms/Folder Creation - Add Article/Script1717994872141.groovy
const { expect } = require('@playwright/test');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Security_TestCases/Login');
  // Burger menu -> Publishing -> Folders (or straight to the folders page, see openFoldersPage)
  await web.openFoldersPage();
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
  // The Katalon script checked the window title for "Article Attributes", but some sites set
  // their own title (e.g. Mecca: "MECCA Base Intranet"). Accept that title, or the Article Name
  // field that every site's Article Attributes / Maintain Article page has. The page can be
  // slow to load on the dev server, so allow 60s.
  const articleNameField = web.page.locator('#strPublicHeading').first();
  await expect.poll(async () => /Article Attributes/i.test(await web.page.title().catch(() => ''))
    || articleNameField.isVisible().catch(() => false), { message: 'the Article Attributes page opens', timeout: 60 * 1000 }).toBe(true);
  let AttributesText = await web.getWindowTitle();
  console.log('Print <<<<<<<<<<<<<<<<<<' + AttributesText+ '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
};
