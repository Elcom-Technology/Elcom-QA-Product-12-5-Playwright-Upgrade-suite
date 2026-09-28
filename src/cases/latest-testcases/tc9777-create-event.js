// Converted from Katalon test case: Test Cases/Latest_Testcases/TC9777 - Create Event
// Original script: Scripts/Latest_Testcases/TC9777 - Create Event/Script1722508447681.groovy
const { expect } = require('@playwright/test');
const { G, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.click('Calendar_PageObjects/AppointmentListing_PO/Alldayappointment_PO/Dashboard Icon/Click_Dashboard');
  // The admin side menu no longer has the Events > Maintain Events items the Katalon steps
  // clicked; open the Maintain Events page (the dashboard's Events tile link) directly.
  await web.navigateToUrl(G.domainname.replace(/\/+$/, '') + '/EventSearch.aspx');
  await web.click('Workflow_PageObjects/Page_Maintain Events - Other - v12 Developm_2b2bb8/input_Maintain Events_btn btn-primary');
  let Eventname = 'Katalon Test  Event' + nanoTime();
  G.CurrentEventname = Eventname;
  await web.setText('Latest test objects/Page_Event Management - Other - v12 Develop_7ed485/input_(mandatory)_ctl00ContentPlaceHolderMa_d3deef', Eventname);
  await web.setText('Latest test objects/Page_Event Management - Other - v12 Develop_7ed485/textarea_(mandatory)_ctl00ContentPlaceHolde_d03d8c', 'Event Katalon Test');
  await web.click('Latest test objects/Page_Event Management - Other - v12 Develop_7ed485/input_Event status is Required_ctl00Content_139fca');
  await web.click('Latest test objects/Page_Event Management - Other - v12 Develop_7ed485/input_(mandatory)_ctl00ContentPlaceHolderMa_151632');
  await web.click('Latest test objects/Page_Event Management - Other - v12 Develop_7ed485/li_Elcom, Eveleigh, NSW, Australia');
  await web.setText('Latest test objects/Page_Event Management - Other - v12 Develop_7ed485/a_Updown arrow keys change the date_ctl00_C_f55958', '31/07/2027 12:00 AM');
  await web.click('Latest test objects/Page_Event Management  Deployment Site/a_Online Registration to Attend');
  await web.click('Latest test objects/Page_Event Management  Deployment Site/a_Registration Options');
  await web.click('Latest test objects/Page_Event Management  Deployment Site/input_Registration Options_ctl00ContentPlac_9463bf');
  await web.click('Latest test objects/Page_Event Management  Deployment Site/input__ctl00ContentPlaceHolderMainNoAjaxsub_54d4a4');
  // Let the save finish before the page is reloaded (reloading too early can cancel it).
  await web.page.waitForLoadState('networkidle').catch(() => {});
  let url = await web.getUrl();
  await web.navigateToUrl(url);
  console.log('--------------------' + url + '------------------------------');
  await web.setText('Latest test objects/Page_Maintain Events  Deployment Site/input_Keywords_ctl00ContentPlaceHolderMainN_0d9e8f', Eventname);
  await web.executeJavaScript('window.scrollTo(0, 900);', null);
  await web.click('Latest test objects/Page_Maintain Events  Deployment Site/input_User list excludes registered members_125726');
  url = await web.getUrl();
  console.log('--------------------' + url + '------------------------------');
  await web.navigateToUrl(url);
  await web.click('Latest test objects/Page_Maintain Events  Deployment Site/a_Katalon Test  Event1953871351846200Opens _ded2dc');
  await web.switchToWindowIndex(1);
  await web.executeJavaScript('window.scrollTo(0, 600);', null);
  // Not in the original Katalon script: check the opened event is the one just created.
  await expect(web.page.getByText(Eventname).first(), 'the new event page shows its name').toBeVisible({ timeout: 30 * 1000 });
  console.log('Print <<<<<<<<<<<<<<<<<<' + Eventname + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
};
