// Converted from Katalon test case: Test Cases/DocumentManager_TestCases/TC9759 - Restore a document to previous version
// Original script: Scripts/DocumentManager_TestCases/TC9759 - Restore a document to previous version/Script1705991336735.groovy
const { expect } = require('@playwright/test');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('DocumentManager _PageObjects/Admin Menu Icon Navigation/Admin menu icon');
  await web.click('Common_RB,RS,PB_PageObjects/Publishmenu/Click publishing menu in navigation');
  await web.click('DocumentManager _PageObjects/Click Document manager in navigation/Click Document Manager menu');
  await web.setText('DocumentManager _PageObjects/Search for a Document/DocumentSearch', 'Test Automation doc');
  await web.click('DocumentManager _PageObjects/SearchSearch Button/ClickbtnSearch');
  let ActualDocTitle = await web.getText('Assertion_PageObjects/Get Doc Title');
  console.log('Print <<<<<<<<<<<<<<<<<<' + ActualDocTitle + '<<<<<<<<<<<<<<<<<<' );
  await web.click('DocumentManager _PageObjects/Click Edit icon Object/Click Edit button');
  await web.clearText('DocumentManager _PageObjects/Title name Edit/Edit Text Field text');
  await web.setText('DocumentManager _PageObjects/Title name Edit/Edit Text Field text', 'Test Automation doc - EDIT');
  await web.executeJavaScript('window.scrollTo(0, -document.body.scrollHeight);', null);
  await web.click('DocumentManager _PageObjects/Edit Click Publish button Object/a_Publish');
  await web.setText('DocumentManager _PageObjects/Search for a Document/DocumentSearch', 'Test Automation doc');
  await web.click('DocumentManager _PageObjects/SearchSearch Button/ClickbtnSearch');
  let ExpectedDocTitle = await web.getText('Assertion_PageObjects/Get Doc Title');
  console.log('Print <<<<<<<<<<<<<<<<<<' + ExpectedDocTitle + '<<<<<<<<<<<<<<<<<<' );
  await web.click('DocumentManager _PageObjects/Document History Object/Click History button');
  await web.click('DocumentManager _PageObjects/Restore Object/Clcik Restore Button');
  await web.waitForAlert(10);
  await web.acceptAlert();
  console.log(ActualDocTitle);
  console.log('Print <<<<<<<<<<<<<<<<<<' + ExpectedDocTitle + '<<<<<<<<<<<<<<<<<<' );
  if (ExpectedDocTitle.includes('Test Automation doc - EDIT')) {
    expect(true).toBeTruthy();
  } else {
    expect(false).toBeTruthy();
  }
};
