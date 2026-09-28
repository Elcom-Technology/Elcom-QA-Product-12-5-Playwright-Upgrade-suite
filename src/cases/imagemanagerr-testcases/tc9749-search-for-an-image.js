// Converted from Katalon test case: Test Cases/ImageManagerr_Testcases/TC9749 - Search for an image
// Original script: Scripts/ImageManagerr_Testcases/TC9749 - Search for an image/Script1707722027796.groovy
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
  let Verify = await web.getText('Assertion_PageObjects/Verify Image text');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "KatalonTestImage")).toBeTruthy();
};
