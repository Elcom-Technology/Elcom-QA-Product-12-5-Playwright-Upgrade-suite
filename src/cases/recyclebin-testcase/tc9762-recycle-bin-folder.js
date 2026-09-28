// Converted from Katalon test case: Test Cases/Recyclebin_Testcase/TC9762 - Recycle bin Folder
// Original script: Scripts/Recyclebin_Testcase/TC9762 - Recycle bin Folder/Script1717039977106.groovy
const { expect } = require('@playwright/test');
const { G, containsIgnoreCase } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/CreateFolder');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Manage Folders and Articles/LastCreatedFolder');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Manage Folders and Articles/AddArticle_Option');
  let CreateFolder = G.CurrentFoldername_createfolder;
  console.log(CreateFolder);
  await web.setText('Common_TC,Login,FD,PB_PageObjects/Page_Article Attributes/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', 'Katalon Test Article Recyclebin');
  await web.setText('Common_TC,Login,FD,PB_PageObjects/Page_Article Attributes/BriefDescription', 'Test Desc');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Article Attributes/a_Draft');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnSaveTop');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Edit Article TestArticle - Elcom_Autom_c8be2c/a_Publish');
  G.CurrentFoldername_createfolder;
  await web.click('Recycle bin/Click folder icon/Click folder icon');
  await web.click('Recycle bin/Search folder/Click search icon');
  await web.switchToWindowIndex(1);
  await web.click('Recycle bin/Search folder/Click folder tab');
  await web.setText('Recycle bin/Search folder/Enter folder name', G.CurrentFoldername_createfolder);
  await web.click('Recycle bin/Search folder/Click search button');
  await web.click('Recycle bin/Search folder/Click search folder');
  await web.closeWindowIndex(1);
  await web.switchToWindowIndex(0);
  await web.click('Recycle bin/Search folder/Delete Folder');
  await web.acceptAlert();
  await web.click('Recycle bin/Click recycle bin menu1');
  await web.selectOptionByIndex('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Recyclebin Object/Click Type Dropdown/ArticleDocumentFolderImage', 3);
  await web.setText('Recycle bin/Folder name search', G.CurrentFoldername_createfolder);
  await web.click('Recycle bin/Click filter btn');
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Enable checkbox Objectte/Click Checkbox select');
  await web.click('Recycle bin/Click restore btn');
  await web.acceptAlert();
  await web.click('Recycle bin/Search folder/Click Folder menu');
  await web.click('Recycle bin/Search folder/Click search icon');
  await web.switchToWindowIndex(1);
  await web.click('Recycle bin/Search folder/Click folder tab');
  await web.setText('Recycle bin/Search folder/Enter folder name', G.CurrentFoldername_createfolder);
  await web.click('Recycle bin/Search folder/Click search button');
  await web.scrollToElement('Recycle bin/Search folder/Click search button', 3);
  let Verify = await web.getText('Assertion_PageObjects/VerifyFolderRecyclebin');
  console.log(('Print <<<<<<<<<<<<<<<<<<' + Verify) + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  // Check for the exact folder this run created and restored - the original only checked
  // for "Katalon Test folder", which older test folders also match.
  expect(containsIgnoreCase(Verify, G.CurrentFoldername_createfolder)).toBeTruthy();
};
