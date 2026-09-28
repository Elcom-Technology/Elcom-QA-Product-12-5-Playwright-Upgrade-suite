// Converted from Katalon test case: Test Cases/ImageManagerr_Testcases/TC9751 - Multiple Image Upload
// Original script: Scripts/ImageManagerr_Testcases/TC9751 - Multiple Image Upload/Script1716876396413.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, createTimeStampedFile, resource } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('ImageManager_PageObjects/Nav Image manager menu Object/Click Image Manager');
  await web.click('ImageManager_PageObjects/Page_Image Manager - Upload Multiple Images  Deployment Site/a_Upload Multiple Images');
  await web.click('ImageManager_PageObjects/Page_Image Manager - Upload Multiple Images  Deployment Site/span_select');
  await web.setText('ImageManager_PageObjects/Enter folder name/Enter folder name', 'Elcom_Automation_Folder');
  await web.click('ImageManager_PageObjects/Click Folder/Click folder object');
  // Groovy helper "createTimeStampedImage" is provided by the shared library.
  let img1Path = createTimeStampedFile( resource('DocumentManager_Images/Automation Image 1.png'), 'Automation_Image_1' );
  await web.uploadFile('ImageManager_PageObjects/Image Upload click/Image Upload', img1Path );
  await web.setText('ImageManager_PageObjects/Alt Text 1/Alt text 1', 'Image 1');
  let img2Path = createTimeStampedFile( resource('DocumentManager_Images/Automation Image 2.png'), 'Automation_Image_2' );
  await web.uploadFile('ImageManager_PageObjects/Image upload 2/Image upload 2', img2Path );
  await web.setText('ImageManager_PageObjects/Alt text 2/Alt text Object', 'Image 2');
  let img3Path = createTimeStampedFile( resource('DocumentManager_Images/Automation Image 3.png'), 'Automation_Image_3' );
  await web.uploadFile('ImageManager_PageObjects/Image Upload 3/Image uplaod 3', img3Path );
  await web.setText('ImageManager_PageObjects/Alt text 3/Alt text3', 'Image 3');
  await web.executeJavaScript('window.scrollTo(0, 0);', null);
  await web.click('ImageManager_PageObjects/Click Upload/Click Upload');
  await web.delay(15);
  await web.click('Assertion_PageObjects/Click search image Tab');
  await web.setText('ImageManager_PageObjects/Search for an Image Object/search iamge field', 'Automation');
  await web.click('ImageManager_PageObjects/Search for an Image Button Object/Click Search button');
  let Verify = await web.getText('Assertion_PageObjects/Multiple Img verify 1');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Automation")).toBeTruthy();
};
