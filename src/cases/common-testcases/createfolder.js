// Converted from Katalon test case: Test Cases/Common_TestCases/CreateFolder
// Original script: Scripts/Common_TestCases/CreateFolder/Script1702903017003.groovy
const { expect } = require('@playwright/test');
const { G, containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('Common_TestCases_PageObjects/Page_Welcome to your site - Home - v12 Deve_04d2dc/amain-menu-toggle');
  await web.click('Common_TestCases_PageObjects/Page_Welcome to your site - Home - v12 Deve_04d2dc/span_Publishing');
  await web.click('Common_TestCases_PageObjects/Page_Welcome to your site - Home - v12 Deve_04d2dc/span_Publishing');
  await web.click('Common_TestCases_PageObjects/Page_Welcome to your site - Home - v12 Deve_04d2dc/span_Folders');
  await web.click('Common_TestCases_PageObjects/Page_Manage Folders and Articles/span_Elcom_Automation_Folder');
  await web.click('Common_TestCases_PageObjects/Page_Manage Folders and Articles/AddFolderOption');
  let foldername = 'Katalon Test folder' + nanoTime();
  G.CurrentFoldername_createfolder = foldername;
  await web.setText('Common_TC,Login,FD,PB_PageObjects/Page_Maintain Folders - Other - v12 Develop_3da33c/FolderNameField', foldername);
  await web.click('Common_TC,Login,FD,PB_PageObjects/Page_Maintain Folders - Other - v12 Develop_3da33c/SaveButton');
  console.log('Print <<<<<<<<<<<<<<<<<<' + foldername + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(foldername, "Katalon Test folder")).toBeTruthy();
};
