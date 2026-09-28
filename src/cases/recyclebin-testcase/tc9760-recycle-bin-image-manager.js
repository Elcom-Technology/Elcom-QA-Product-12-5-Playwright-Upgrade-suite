// Converted from Katalon test case: Test Cases/Recyclebin_Testcase/TC9760 - Recycle bin image manager
// Original script: Scripts/Recyclebin_Testcase/TC9760 - Recycle bin image manager/Script1716970039710.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Recyclebin Object/span_Recycle Bin');
  await web.selectOptionByIndex('Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Page_Recycle Bin/select_(All)ArticleDocumentFolderImage', 4);
  await web.setText('Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Page_Recycle Bin - Name search/input name', 'KatalonTestImage');
  await web.click('Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Page_Recycle Bin - Filter/btnFilter');
  // Remember which image is restored (the first row) so it can be searched for afterwards.
  let RestoredImage = await web.getText('Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Page_Recycle Bin - first row name/td_Name');
  console.log('Print <<<<<<<<<<<<<<<<<< Restoring: ' + RestoredImage + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  await web.click('Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Page_Recycle Bin -checkbox/input_Datecheckbox');
  await web.click('Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Page_Recycle Bin - Restore buttuon/Click restore button');
  if (await web.verifyAlertPresent(30)) {
    console.log('Alert is present');
    await web.acceptAlert();
  }
  // Not in the original Katalon script: check the restored image is back in Image Manager.
  await web.page.waitForLoadState('networkidle').catch(() => {});
  await web.click('ImageManager_PageObjects/Nav Image manager menu Object/Click Image Manager');
  await web.setText('ImageManager_PageObjects/Search for an Image Object/search iamge field', RestoredImage);
  await web.click('ImageManager_PageObjects/Search for an Image Button Object/Click Search button');
  let Verify = await web.getText('Assertion_PageObjects/Verify Image text');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, RestoredImage)).toBeTruthy();
};
