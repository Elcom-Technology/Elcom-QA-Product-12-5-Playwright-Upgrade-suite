// Converted from Katalon test case: Test Cases/ImageManagerr_Testcases/TC9748 - Add an image through regular upload
// Original script: Scripts/ImageManagerr_Testcases/TC9748 - Add an image through regular upload/Script1707722027787.groovy
const { expect } = require('@playwright/test');
const { UPLOAD_DIR, containsIgnoreCase, copyFile, formatDate, resource } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('ImageManager_PageObjects/Nav Image manager menu Object/Click Image Manager');
  await web.click('ImageManager_PageObjects/Click Upload tab object/Clcik Upload an Image');
  await web.click('ImageManager_PageObjects/Click Target folder for upload Image Object/Click Upload image folder');
  await web.setText('DocumentManager _PageObjects/Page_Document Manager - Enter folder name/Enter folder name', 'Elcom_Automation_Folder');
  await web.waitForElementVisible('DocumentManager _PageObjects/Page_Document Manager - Enter folder name/ListofFolders' ,5);
  await web.click('DocumentManager _PageObjects/Page_Document Manager - Enter folder name/ListofFolders');
  let timeStamp = formatDate('yyyyMMdd_HHmmss');
  let sourcePath = resource('DocumentManager_Images/KatalonTestImage2.jpg');
  let newFileName = "KatalonTestImage_" + timeStamp + ".jpg";
  let targetPath = UPLOAD_DIR + '/' + newFileName;
  copyFile(sourcePath, targetPath);
  await web.uploadFile('ImageManager_PageObjects/Upload Image Object/Click upload image folder', targetPath );
  await web.setText('ImageManager_PageObjects/Alt text objct/Alt text name', 'Test');
  await web.click('ImageManager_PageObjects/Clcik Upload button object/Click Upload image buuton');
  let Verify = await web.getText('Assertion_PageObjects/Verify Image text');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "KatalonTestImage")).toBeTruthy();
};
