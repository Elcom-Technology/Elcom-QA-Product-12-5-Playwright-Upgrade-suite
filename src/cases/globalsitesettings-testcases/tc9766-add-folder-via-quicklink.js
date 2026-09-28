// Converted from Katalon test case: Test Cases/GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink
// Original script: Scripts/GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink/Script1726833463640.groovy
const { expect } = require('@playwright/test');
const { G } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS');
  await web.navigateToUrl(G.domainname);
  await web.click('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/a_Add');
  await web.delay(3);
  await web.click('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/a_Add Folder');
  await web.delay(3);
  let foldername = 'Elcom_QuickAdd_Folder'+Date.now();
  await web.setText('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/input_Title_ctl00ctl00ctl14addFolderModalDi_fa0d44', foldername);
  await web.setText('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/input_Parent Folder_ctl00ctl00ctl14addFolde_32979c', 'Elcom_Automation_Folder');
  await web.click('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/input_Parent Folder_ctl00ctl00ctl14addFolde_32979c');
  await web.click('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/li_Elcom_Automation_FolderElcom_Automation_Folder');
  await web.click('GlobalSiteSettings_Objects/Page_Edit an article  Deployment Site/input_blank_ctl00ctl00ctl14addFolderModalDi_69f22c');
  // After saving, the site opens the new (empty) folder. Its name is in the page title, not in
  // the page text, so check the title (verifyTextPresent only looks at the page text).
  await expect.poll(() => web.getWindowTitle().catch(() => ''), { timeout: 30 * 1000 }).toContain(foldername);
  console.log('Print <<<<<<<<<<<<<<<<<<' + await web.getWindowTitle() + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
};
