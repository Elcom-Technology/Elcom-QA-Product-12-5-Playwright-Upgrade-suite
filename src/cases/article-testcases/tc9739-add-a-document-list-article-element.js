// Converted from Katalon test case: Test Cases/Article Testcases/TC9739 - Add a Document List article element
// Original script: Scripts/Article Testcases/TC9739 - Add a Document List article element/Script1701172772225.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Maintain article page/Enter the article name for Document list');
  await web.setText('Articles Elements_Page_Objects/Add a Document List element/Maintain article page/Enter the article name for Document list', 'Document List Katalon'+ nanoTime());
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Maintain Article page  Click on User Friendly URL/Click on UserFriendlyURL');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Click on Draft Button/Click the Draft button');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Scroll towards Continue in Define Article layout/Mouse over Continue Button');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Click on Add Icon to Add Document list element/Click on add icon');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Click on Documents Tab in Add Element window/Click on Documents Tabs in Add element window');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Click on the Document list element/Click the Document List Article element');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Articles Elements_Page_Objects/Add a Document List element/MouseHover/MouseHover Draft', 'Articles Elements_Page_Objects/Add a Document List element/Scroll towards Document list (1)/Mouse over on Document List');
  await web.setText('Common Article_Forms_Page_Objects/Publishing Folder/In the settings tab enter the Total no of Documents to display/Add the Total no of Documents to display', '100');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Add display fields');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Click File Icon');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Click File Name');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Click Folders tab');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Include current folder');
  await web.click('Articles Elements_Page_Objects/Add a Document List element/Click the Publish Button to create a Document list/Click on PUblish button for the Document List article element');
  let Verify = await web.getText('Assertion_PageObjects/VerifyDocList');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Type File")).toBeTruthy();
};
