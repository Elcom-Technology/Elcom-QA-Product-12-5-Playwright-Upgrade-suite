// Converted from Katalon test case: Test Cases/Recyclebin_Testcase/TC9763 - Recycle bin Article
// Original script: Scripts/Recyclebin_Testcase/TC9763 - Recycle bin Article/Script1717056321171.groovy
const { expect } = require('@playwright/test');
const { G, containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/CreateFolder');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Manage Folders and Articles/LastCreatedFolder');
  let Foldername = await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Manage Folders and Articles/AddArticle_Option');
  let Articlename = 'Katalon_Automation_Article_Recyclebin' + nanoTime();
  G.currentarticlename = Articlename;
  await web.setText('Common_TC,Login,FD,PB_PageObjects/Page_Article Attributes/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', Articlename);
  G.currentarticlename;
  await web.setText('Common_TC,Login,FD,PB_PageObjects/Page_Article Attributes/BriefDescription', 'Test Desc');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Article Attributes/a_Draft');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnSaveTop');
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Edit Article TestArticle - Elcom_Autom_c8be2c/a_Publish');
  await web.click('Recycle bin/Click folder icon/Click folder icon');
  await web.click('Recycle bin/Search folder/Click search icon');
  await web.switchToWindowIndex(1);
  await web.click('Recycle bin/Click folder icon/Click Artcile tab');
  await web.setText('Recycle bin/Search folder/Text Artcile search', G.currentarticlename);
  await web.click('Recycle bin/Search folder/Click search button');
  await web.click('Recycle bin/Search folder/Click Article in search');
  await web.closeWindowIndex(1);
  await web.switchToWindowIndex(0);
  await web.click('Recycle bin/Search folder/Delete Folder');
  await web.acceptAlert();
  await web.delay(3);
  await web.executeJavaScript('window.scrollTo(0, 0);', null);
  await web.click('Recycle bin/Click recycle bin menu1');
  await web.selectOptionByIndex('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Recyclebin Object/Click Type Dropdown/ArticleDocumentFolderImage', 1);
  await web.setText('Recycle bin/Folder name search', G.currentarticlename);
  await web.click('Recycle bin/Click filter btn');
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Enable checkbox Objectte/Click Checkbox select');
  await web.click('Recycle bin/Click restore btn');
  await web.acceptAlert();
  await web.click('Recycle bin/Search folder/Click Folder menu');
  await web.click('Recycle bin/Search folder/Click search icon');
  await web.switchToWindowIndex(1);
  await web.setText('Recycle bin/Search folder/Text Artcile search', G.currentarticlename);
  await web.click('Recycle bin/Search folder/Click search button');
  await web.scrollToElement('Recycle bin/Search folder/Click search button', 3);
  let Verify = await web.getText('Assertion_PageObjects/VerifyArticleRecyclebin');
  console.log(('Print <<<<<<<<<<<<<<<<<<' + Verify) + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  // Check for the exact article this run created and restored - the original only checked
  // for "Katalon_Automation_Article_Recyclebin", which older test articles also match.
  expect(containsIgnoreCase(Verify, Articlename)).toBeTruthy();
};
