// Converted from Katalon test case: Test Cases/DocumentManager_TestCases/TC9752 - Delete a document not in use
// Original script: Scripts/DocumentManager_TestCases/TC9752 - Delete a document not in use/Script1705991336745.groovy
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
  let DocumentSearch = await web.getText('Assertion_PageObjects/Doc Search');
  console.log('Print <<<<<<<<<<<<<<<<<<' + DocumentSearch + '<<<<<<<<<<<<<<<<<<' );
  let DocumetNot_in_use = await web.verifyElementVisible('DocumentManager _PageObjects/Search for a Document not in use/btn-not in use', 'STOP_ON_FAILURE');
  await web.click('DocumentManager _PageObjects/Delete document Object/Delete button');
  await web.verifyAlertPresent(5);
  await web.acceptAlert();
  await web.delay(5);
  await web.setText('DocumentManager _PageObjects/Search for a Document/DocumentSearch', 'Test Automation doc');
  await web.click('DocumentManager _PageObjects/SearchSearch Button/ClickbtnSearch');
  expect(containsIgnoreCase(DocumentSearch, 'Test Automation')).toBeTruthy();
};
