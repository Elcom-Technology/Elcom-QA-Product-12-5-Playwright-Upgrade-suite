// Converted from Katalon test case: Test Cases/Folder_TestCases/TC9765 - Add Folder
// Original script: Scripts/Folder_TestCases/TC9765 - Add Folder/Script1702317172317.groovy
const { G, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Backend admin page/burger menu click');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Navigate to Publishing/Click Publishing');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Naviagte to publishing Folders/Click Folders');
  await web.click('Folder_PageObjects/Add Folder/span_Elcom_Automation_Folder');
  await web.click('Folder_PageObjects/Add_Folder_Option');
  let str = 'TestFolderQA' + nanoTime();
  G.foldername = str;
  await web.setText('Folder_PageObjects/Folder_Name_Field', str);
  await web.click('Folder_PageObjects/Add Folder/Save_Button');
  await web.verifyTextPresent(str, false);
};
