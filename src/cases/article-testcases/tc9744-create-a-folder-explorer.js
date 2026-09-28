// Converted from Katalon test case: Test Cases/Article Testcases/TC9744 - Create a Folder Explorer
// Original script: Scripts/Article Testcases/TC9744 - Create a Folder Explorer/Script1718187763829.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Articles Elements_Page_Objects/Folder Explorer/Page_Article Attributes  Deployment Site/input__ctl00ContentPlaceHolderMainNoAjaxstr_06079a', 'Folder Explorer' + nanoTime());
  await web.setText('Articles Elements_Page_Objects/Folder Explorer/Page_Article Attributes  Deployment Site/input_elcom_automation_folderharsha-article_1a8e45', '');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Article Attributes  Deployment Site/input_elcom_automation_folderharsha-article_1a8e45');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Article Attributes  Deployment Site/a_Draft');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Scroll and click on Continue/Click Continue');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Article Folder Explorer  Deployment Site/a_Add');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Article Folder Explorer  Deployment Site/li_All');
  await web.setText('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Article Folder Explorer  Deployment Site/input_Filter elements list_element-filter-field', 'Folder Explorer');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Article Folder Explorer  Deployment Site/span_Folder Explorer');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Article Folder Explorer  Deployment Site/div_Click to edit_hoverPlaceHolder', 'Articles Elements_Page_Objects/Folder Explorer/Page_Article Attributes  Deployment Site/CLickonEdit');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Article Folder Explorer  Deployment Site/ul_Folder Explorer                         _7bd4dd');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/a_Folders');
  await web.setText('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Choose Folder_ctl07SelectFoldersselFo_df29f0', 'Elcom_Sub_Folder');
  // Wait for the search result itself - clicking the first list item straight away
  // picked whatever folder the dropdown showed before the search finished.
  await web.waitForElementVisible('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/li_Elcom_Sub_Folder', 30);
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/li_Elcom_Sub_Folder');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Clear_ctl07SelectFoldersctl04');
  await web.waitForElementVisible('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/Folder selection add', 5);
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/a_Content');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Display the following types of conten_03ec75');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Articles_ctl07chkDisplayDocuments');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/a_Actions');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Folder Actions_ctl07chkActionsAddNewFolder');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Add a new folder_ctl07chkActionsEditFolder');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Edit a folder_ctl07chkActionsDeleteFolder');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Move a folder_ctl07chkActionsAddNewArticle');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Add a new Article_ctl07chkActionsUploadDocs');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Upload documents_ctl07chkActionsUploadImgs');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Upload images_ctl07chkActionsEditDeleteDocs');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Content Actions_ctl07chkActionsViewContent');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_View Content_ctl07chkActionsEditContent');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Edit Content_ctl07chkActionsMoveContent');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Move Content_ctl07chkActionsDeleteContent');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Edit Module  Deployment Site/input_Open items in a new tab when viewing _bb7950');
  await web.click('Articles Elements_Page_Objects/Folder Explorer/Page_Folder Explorer  Deployment Site/span_Folder Explorer_rtPlus rtPlusHover');
  let Verify = await web.getText('Assertion_PageObjects/Verify Folder Explorer');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Folder Explorer")).toBeTruthy();
};
