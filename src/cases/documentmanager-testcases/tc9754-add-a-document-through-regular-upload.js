// Converted from Katalon test case: Test Cases/DocumentManager_TestCases/TC9754 - Add a document through regular upload
// Original script: Scripts/DocumentManager_TestCases/TC9754 - Add a document through regular upload/Script1705991336717.groovy
const { expect } = require('@playwright/test');
const { UPLOAD_DIR, containsIgnoreCase, copyFile, formatDate, resource } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.sleep(3000);
  await web.maximizeWindow();
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('DocumentManager _PageObjects/Click Document manager in navigation/Click Document Manager menu');
  await web.click('DocumentManager _PageObjects/Upload Document page/Upload a Document tab');
  await web.click('DocumentManager _PageObjects/Select Targent folder field/select target folder field');
  await web.setText('DocumentManager _PageObjects/Page_Document Manager - Enter folder name/Enter folder name', 'Elcom_Automation_Folder');
  await web.waitForElementVisible('DocumentManager _PageObjects/Page_Document Manager - Enter folder name/ListofFolders' ,5);
  await web.click('DocumentManager _PageObjects/Page_Document Manager - Enter folder name/ListofFolders');
  await web.setText('DocumentManager _PageObjects/Breif Description/Breif Des - Text', 'Test Document upload');
  await web.setText('DocumentManager _PageObjects/Title name Edit/Edit Text Field text', 'Test Automation doc');
  let timeStamp = formatDate('yyyyMMdd_HHmmss');
  let sourcePath = resource('DocumentManager_Documents/Test Automation doc.docx');
  let newFileName = "Test Automation doc_" + timeStamp + ".docx";
  let targetPath = UPLOAD_DIR + '/' + newFileName;
  copyFile(sourcePath, targetPath);
  await web.uploadFile('DocumentManager _PageObjects/Choose file/Choose file upload', targetPath );
  await web.click('DocumentManager _PageObjects/Add document Objecte/Add Document Btn');
  let Verify = await web.getText('Assertion_PageObjects/Document verify');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Test Automation doc")).toBeTruthy();
};
