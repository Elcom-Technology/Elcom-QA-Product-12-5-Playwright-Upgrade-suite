// Converted from Katalon test case: Test Cases/Security_TestCases/TC9757 - Add New User with group
// Original script: Scripts/Security_TestCases/TC9757 - Add New User with group/Script1726652112545.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, loadNewUserDetails } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common_TestCases/Login - site');
  await web.maximizeWindow();
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Backend admin page/burger menu click');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Navigate to Publishing/Click Publishing');
  await web.click('Common Article_Forms_Page_Objects/Publishing Folder/Naviagte to publishing Folders/Click Folders');
  await web.click('Security_PageObjects/Add User/Navigate to Admin New user Menu/span_Security');
  await web.click('Security_PageObjects/Add User/Navigate to Admin New user Menu/span_Users');
  await web.click('Security_PageObjects/Add User/Add New User/input_Users_ctl00ContentPlaceHolderMainNoAj_f78e11');
  // Username and password of the new user come from the "Add new user with group" sheet of the
  // login details Excel file on the R drive (the password is stored encrypted). The username is
  // used as a prefix with a random number, because Elcom refuses a logon name that already exists.
  const newUser = await loadNewUserDetails();
  let randomNo = Math.floor(Math.random() * 10000);
  let Username = newUser.username + randomNo;
  let Email = 'TestEmail';
  await web.setText('Security_PageObjects/Add User/Add New User/input__ctl00ContentPlaceHolderMainNoAjaxtxt_3eaa73', Username);
  console.log(('--------------------' + Username) + '------------------------------');
  await web.selectOptionByValue('Security_PageObjects/Add User/Add New User/select_(none)BobMrMsMrsMissDr', '0', true);
  await web.selectOptionByValue('Security_PageObjects/Add User/Add New User/select_(none)BobMrMsMrsMissDr', '37', true);
  await web.setText('Security_PageObjects/Add User/Add New User/input__ctl00ContentPlaceHolderMainNoAjaxtxt_38a00e', 'TestUser');
  await web.setText('Security_PageObjects/Add User/Add New User/input__ctl00ContentPlaceHolderMainNoAjaxtxt_9799e5', 'Automation');
  await web.setText('Security_PageObjects/Add User/Add New User/input__ctl00ContentPlaceHolderMainNoAjaxtxtEmail', (Email + randomNo) + '@elcom.com.au');
  console.log(('--------------------' + Email + randomNo + '@elcom.com.au') + '------------------------------');
  await web.selectOptionByValue('Security_PageObjects/Add User/Add New User/select_(none)AdministratorAPI test typeGowt_4c6a44', '0', true);
  await web.selectOptionByValue('Security_PageObjects/Add User/Add New User/select_(none)AdministratorAPI test typeGowt_4c6a44', '1', true);
  await web.setText('Security_PageObjects/Add User/Add New User/input__ctl00ContentPlaceHolderMainNoAjaxtxt_d8bf3f', newUser.password);
  await web.setText('Security_PageObjects/Add User/Add New User/input__ctl00ContentPlaceHolderMainNoAjaxtxt_97f172', newUser.password);
  await web.click('Security_PageObjects/Add User/Add New User/input_Status_ctl00ContentPlaceHolderMainNoA_9768ab');
  await web.delay(3);
  await web.executeJavaScript('window.scrollTo(0, 0);', null);
  await web.click('Security_PageObjects/Add User/Add New User/a_Save');
  await web.setText('Security_PageObjects/Add User/Add User to Group/input_Choose Groups_ctl00ContentPlaceHolder_a1d030', 'sys');
  await web.waitForElementVisible('Security_PageObjects/Add User/Add User to Group/SelectfromDropdwon', 5);
  await web.click('Security_PageObjects/Add User/Add User to Group/SelectfromDropdwon');
  await web.waitForElementClickable('Security_PageObjects/Add User/Add User to Group/li_System', 5);
  await web.click('Security_PageObjects/Add User/Add User to Group/input_Clear_ctl00ContentPlaceHolderMainNoAj_31612c');
  await web.click('Security_PageObjects/Add User/Add User to Group/input_Add User to Groups_ctl00ContentPlaceH_944e29');
  await web.delay(5);
  // Search for the exact user made in this run.
  await web.setText('Assertion_PageObjects/Username', Username);
  await web.click('Assertion_PageObjects/Click user Search button');
  let EmailVerify = await web.getText('Assertion_PageObjects/VerifyEmail');
  console.log(('Print>>>>>>>>>>>>>' + EmailVerify) + '>>>>>>>>>>>>>');
  if (containsIgnoreCase(EmailVerify, (Email + randomNo) + '@elcom.com.au')) {
    expect(true).toBeTruthy();
  } else {
    expect(false).toBeTruthy();
  }
};
