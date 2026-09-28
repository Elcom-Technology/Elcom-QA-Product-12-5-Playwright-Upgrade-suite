// Converted from Katalon test case: Test Cases/ImageManagerr_Testcases/TC9758 - Restore an image to previous version
// Original script: Scripts/ImageManagerr_Testcases/TC9758 - Restore an image to previous version/Script1707722027809.groovy
const { expect } = require('@playwright/test');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('ImageManager_PageObjects/Nav Image manager menu Object/Click Image Manager');
  await web.setText('ImageManager_PageObjects/Search for an Image Object/search iamge field', 'KatalonTestImage');
  await web.click('ImageManager_PageObjects/Search for an Image Button Object/Click Search button');
  let ActualImgTitle = await web.getText('Assertion_PageObjects/Verify Image text');
  console.log(ActualImgTitle);
  await web.click('ImageManager_PageObjects/Image _Edit icon object/a_Edit');
  await web.clearText('ImageManager_PageObjects/Tile Edit text Object/Title Edit Text');
  await web.setText('ImageManager_PageObjects/Tile Edit text Object/Title Edit Text', 'KatalonTestImage- Edit');
  await web.click('ImageManager_PageObjects/Edit Publish button Object/Click Publish button');
  let ExpectedImgTitle = await web.getText('Assertion_PageObjects/Verify Image text');
  console.log(ExpectedImgTitle);
  await web.click('ImageManager_PageObjects/Click History Ion Objecte/Click History icon -Versions');
  await web.click('ImageManager_PageObjects/Click Restore Object 1/a_Restore');
  await web.waitForAlert(10);
  await web.acceptAlert();
  console.log('Print <<<<<<<<<<<<<<<<<<' + ActualImgTitle);
  console.log('Print <<<<<<<<<<<<<<<<<<' + ExpectedImgTitle);
  if (ExpectedImgTitle.includes('KatalonTestImage- Edit')) {
    expect(true).toBeTruthy();
  } else {
    expect(false).toBeTruthy();
  }
};
