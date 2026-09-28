// Converted from Katalon test case: Test Cases/ImageManagerr_Testcases/TC9750 - Delete image not in use
// Original script: Scripts/ImageManagerr_Testcases/TC9750 - Delete image not in use/Script1707722027821.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('ImageManager_PageObjects/Nav Image manager menu Object/Click Image Manager');
  await web.setText('ImageManager_PageObjects/Search for an Image Object/search iamge field', 'KatalonTestImage');
  await web.click('ImageManager_PageObjects/Search for an Image Button Object/Click Search button');
  let VerifyImageText = await web.getText('Assertion_PageObjects/Verify Image text');
  console.log('Print <<<<<<<<<<<<<<<<<<' + VerifyImageText);
  await web.click('ImageManager_PageObjects/Image - Delete icon Object/a_Delete');
  await web.waitForAlert(15);
  await web.acceptAlert();
  console.log('Print <<<<<<<<<<<<<<<<<<' +VerifyImageText + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(VerifyImageText, "KatalonTestImage")).toBeTruthy();
};
