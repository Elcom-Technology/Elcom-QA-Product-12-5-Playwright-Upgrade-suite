// Converted from Katalon test case: Test Cases/Recyclebin_Testcase/TC9761 - Recycle bin document manager
// Original script: Scripts/Recyclebin_Testcase/TC9761 - Recycle bin document manager/Script1716970028805.groovy
const { expect } = require('@playwright/test');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.maximizeWindow();
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Click Publish Navigation Object/span_Publishing');
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Recyclebin Object/span_Recycle Bin');
  await web.selectOptionByIndex('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Recyclebin Object/Click Type Dropdown/ArticleDocumentFolderImage', 2);
  await web.setText('Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Enter name filed to search Object/Enter Namer to search', 'Test');
  await web.click('Common_RB,RS,PB_PageObjects/Clikc filter button Object/Click Filter button');
  // Remember which document is restored (the first row) so it can be searched for afterwards.
  // The URL column holds "<folder id>/<file name>.aspx", e.g. 652/Test Automation Doc 2_20260909_194148_236.docx.aspx
  let RestoredUrl = await web.getText('Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Page_Recycle Bin - first row name/td_URL');
  let RestoredDoc = RestoredUrl.split('/').pop().replace(/\.aspx$/i, '').replace(/\.[^.]+$/, '');
  console.log('Print <<<<<<<<<<<<<<<<<< Restoring: ' + RestoredDoc + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Enable checkbox Objectte/Click Checkbox select');
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click restore selected button Objevct/Click Restore button');
  await web.acceptAlert();
  // Not in the original Katalon script: wait for the restore to finish before leaving the page.
  await web.page.waitForLoadState('networkidle').catch(() => {});
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Click Document ManagerMenu Object/Document Manager');
  await web.page.waitForLoadState('networkidle').catch(() => {});
  await web.setText('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Click Keywords Search Field/Click Keyword Text', RestoredDoc);
  await web.click('Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Click Search Button Object/Clcik Search button');
  // Check the restored document itself is back. The original checked for "Test Automation doc"
  // (case-sensitive), which never matches "Test Automation Doc 2_..." files.
  const found = web.page.getByRole('link', { name: RestoredDoc });
  await expect(found.first()).toBeVisible({ timeout: 30 * 1000 });
  console.log('Print <<<<<<<<<<<<<<<<<<' + await found.first().innerText() + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
};
