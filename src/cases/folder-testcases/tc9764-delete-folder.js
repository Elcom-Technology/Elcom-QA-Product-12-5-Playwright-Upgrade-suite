// Converted from Katalon test case: Test Cases/Folder_TestCases/TC9764 - Delete Folder
// Original script: Scripts/Folder_TestCases/TC9764 - Delete Folder/Script1705574939189.groovy
const { expect } = require('@playwright/test');
const { G, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Backend admin page/burger menu click');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Navigate to Publishing/Click Publishing');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Naviagte to publishing Folders/Click Folders');
  await web.click('Folder_PageObjects/Add Folder/span_Elcom_Automation_Folder');
  await web.click('Folder_PageObjects/Add_Folder_Option');
  let str = 'TestFolderThen' + nanoTime();
  G.foldername = str;
  await web.setText('Folder_PageObjects/Folder_Name_Field', str);
  await web.click('Folder_PageObjects/Add Folder/Save_Button');
  await web.verifyTextPresent(G.foldername, false);
  // Safety check (not in the Katalon script): Delete acts on the folder selected in the tree and
  // its confirm box is accepted automatically, so make sure the selected folder is the one just
  // created before deleting anything.
  await expect(web.page.locator('.rtSelected').first(), 'the new folder is selected before Delete').toContainText(G.foldername, { timeout: 30 * 1000 });
  await web.click('Folder_PageObjects/Deletefolder/span_Delete');
  await web.waitForAlert(5);
  await web.acceptAlert();
  await web.verifyTextNotPresent(G.foldername, false);
};
