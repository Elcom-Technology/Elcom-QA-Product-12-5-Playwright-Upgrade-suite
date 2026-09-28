// Converted from Katalon test case: Test Cases/DocumentManager_TestCases/TC9755 - Multiple document Upload
// Original script: Scripts/DocumentManager_TestCases/TC9755 - Multiple document Upload/Script1718016138198.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, createTimeStampedFile, resource } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.sleep(3000);
  await web.maximizeWindow();
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('DocumentManager _PageObjects/Click Document manager in navigation/Click Document Manager menu');
  await web.click('DocumentManager _PageObjects/Click Multiple upload tab/Multiple upload tab');
  await web.click('DocumentManager _PageObjects/Click Folder field/Click folder field');
  await web.setText('DocumentManager _PageObjects/Click Folder field/Click folder field', 'Elcom_Automation_Folder');
  await web.click('DocumentManager _PageObjects/Click folder suggestion/Click folder suggestion');
  // Groovy helper "createTimeStampedImage" is provided by the shared library.
  let Doc1Path = createTimeStampedFile( resource('DocumentManager_Documents/Test Automation Doc 1.docx'), 'Test Automation Doc 1' );
  await web.uploadFile('DocumentManager _PageObjects/1st document uplaod/1st doc upload', Doc1Path );
  await web.setText('DocumentManager _PageObjects/Description for upload/Description 1', 'Test Document 1');
  let Doc2Path = createTimeStampedFile( resource('DocumentManager_Documents/Test Automation Doc 2.docx'), 'Test Automation Doc 2' );
  await web.uploadFile('DocumentManager _PageObjects/document upload/2nd document', Doc2Path );
  await web.setText('DocumentManager _PageObjects/Description for upload/Description 2', 'Test Document 2');
  let Doc3Path = createTimeStampedFile( resource('DocumentManager_Documents/Test Automation Doc 3.docx'), 'Test Automation Doc 3' );
  await web.uploadFile('DocumentManager _PageObjects/document upload/Document upload 3', Doc3Path );
  await web.setText('DocumentManager _PageObjects/Description for upload/Description 3', 'Test Document 3');
  await web.executeJavaScript('window.scrollTo(0, 0);', null);
  await web.click('DocumentManager _PageObjects/Click Upload button/Click Upload button');
  await web.click('Assertion_PageObjects/Click Search doc');
  await web.setText('DocumentManager _PageObjects/Search for a Document/DocumentSearch', 'Test Automation Doc');
  await web.click('DocumentManager _PageObjects/SearchSearch Button/ClickbtnSearch');
  let Verify = await web.getText('Assertion_PageObjects/Mutiple doc verify 1');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Test Automation Doc")).toBeTruthy();
};
