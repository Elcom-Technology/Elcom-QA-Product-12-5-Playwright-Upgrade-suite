// Converted from Katalon test case: Test Cases/Reports_TestCases/General/TC9778 - Report generated for the specified date filter
// Original script: Scripts/Reports_TestCases/General/TC9778 - Report generated for the specified date filter/Script1710735350652.groovy

module.exports = async function run(web) {
  const { callTestCase } = require('../../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('Reports_PageObjects/ArticleModified_PO/Click_Dashboard/Click_Dashboard');
  await web.click('Reports_PageObjects/ArticleModified_PO/Expand_Reports/Click_Reports from left menu');
  await web.click('Reports_PageObjects/ArticleModified_PO/Click_Report Dashboard/Click_Report Dashboard');
  await web.click('Reports_PageObjects/ArticleModified_PO/Click_Select Report Dropdown/select_ Select report dropdown');
  await web.selectOptionByLabel(('Reports_PageObjects/ArticleModified_PO/Click_Select Report Dropdown/select_ Select report dropdown'), 'Articles', false, 'STOP_ON_FAILURE');
  await web.selectOptionByIndex('Reports_PageObjects/General/Date filter_PageObjects/Select_Valid From date dropdown/select_Valid From Date Dropdown', 3);
  await web.setText('Reports_PageObjects/General/Date filter_PageObjects/Valid from date days ago/input_Days ago', '9');
  await web.selectOptionByIndex('Reports_PageObjects/General/Date filter_PageObjects/Select from_Valid to Date Dropdown/Date Dropdown', 2);
  await web.click('Reports_PageObjects/ArticleModified_PO/Click_View on Screen button/Click_View on screen button');
  await web.verifyElementPresent('Reports_PageObjects/ReportResult/ResultFirstRow', 5);
};
