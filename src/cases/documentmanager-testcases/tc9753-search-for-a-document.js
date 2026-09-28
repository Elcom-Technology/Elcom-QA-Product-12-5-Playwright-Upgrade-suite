// Converted from Katalon test case: Test Cases/DocumentManager_TestCases/TC9753 - Search for a document
// Original script: Scripts/DocumentManager_TestCases/TC9753 - Search for a document/Script1705991336728.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.maximizeWindow();
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('DocumentManager _PageObjects/Click Document manager in navigation/Click Document Manager menu');
  await web.setText('DocumentManager _PageObjects/Search for a Document/DocumentSearch', 'Test Automation doc');
  await web.click('DocumentManager _PageObjects/SearchSearch Button/ClickbtnSearch');
  let Verify = await web.getText('Assertion_PageObjects/Document verify');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Test Automation doc")).toBeTruthy();
};
