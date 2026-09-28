// Converted from Katalon test case: Test Cases/Form Test cases/TC9747 - Add a Form with Panel
// Original script: Scripts/Form Test cases/TC9747 - Add a Form with Panel/Script1706524369051.groovy
const { expect } = require('@playwright/test');
const { containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', 'Form field Submission' + nanoTime());
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Test');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnS_dfc885');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/PlusButton');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Form');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Click to edit', 'Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/editthis');
  // 5s (as in Katalon) is too short for the form settings page on the dev server.
  if (await web.verifyElementPresent('Form_Page_Objects/Forms Object/Form with Panel/CreateForm', 30, 'OPTIONAL')) {
    // Same as TC9769: let the designer finish loading before Create Form (otherwise it sets
    // itself up twice and every Form Items click adds two items), then wait for it to reload
    // its data after Create Form so Form Items clicks are not lost.
    await web.page.waitForLoadState('networkidle').catch(() => {});
    const designerReady = web.page.waitForResponse((r) => /GetExistingFields/i.test(r.url()), { timeout: 60 * 1000 });
    await web.click('Form_Page_Objects/Forms Object/Form with Panel/CreateForm', 'OPTIONAL');
    await designerReady;
    await web.delay(1);
  } else {
    await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Module - Elcom_Automation_Folder _1a3284/i_fa fa-font');
  }
  // The form designer loads its data (GetEasyFormData / GetExistingFields) after the page
  // opens; a click on "New Panel" before that finishes does nothing.
  await web.page.waitForLoadState('networkidle').catch(() => {});
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/a_New Panel');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/a_New Panel 1');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/a_New Panel 1');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/i_fa fa-font');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/i_fa fa-code');
  // Add a Submit button (not in the original Katalon script) so the form can be submitted.
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/a_Button');
  // The new button is labelled "New Button"; its caption can be typed over in the designer.
  await web.setText('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_Button caption', 'Submit');
  await web.page.keyboard.press('Tab');
  // The designer must hold exactly one panel and one of each field / button.
  const designer = web.page.locator('#ctl07_ctl07_easyformMain');
  await expect(designer.getByText('New Panel 2', { exact: true }), 'only one panel in the form').toHaveCount(0);
  await expect(designer.getByText('Single Line Text', { exact: true }), 'one Single Line Text field').toHaveCount(1);
  // Same as TC9769: wait for the designer to reload after "Save Designer Changes" - publishing
  // before that finishes saves every field a second time.
  const reloaded = web.page.waitForResponse((r) => /GetExistingFields/i.test(r.url()), { timeout: 60 * 1000 });
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_ctl07ctl07easyCommit');
  await reloaded;
  await web.delay(2);
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/a_Email Options');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_ctl07chkRecipientSpecifiedEmailAddress');
  await web.setText('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_ctl07txtEmailRecipient', 'helpdesk@elcom.com.au');
  await web.setText('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_ctl07txtEmailSender', 'helpdesk@elcom.com.au');
  await web.setText('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_ctl07txtEmailSubject', 'Form with Panel');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_ctl07chkEmailAllowAttachments');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_ctl07chkDisplaySubmissionID');
  await web.click('Form_Page_Objects/Forms Object/Form with Panel/Page_Edit Module - Elcom Test Folder Harsha_829aab/input_PublishButton');
  let Verify = await web.getText('Assertion_PageObjects/VerifyFormField');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Form field Submission")).toBeTruthy();
  // The published form must have exactly one of each field (the site has saved them twice).
  for (const field of ['Single Line Text', 'Paragraph With Rich Text Editor']) {
    await expect(web.page.getByText(field, { exact: true }), 'one ' + field + ' on the published form').toHaveCount(1);
  }
  await expect(web.page.getByText('New Panel 1', { exact: true }), 'one panel on the published form').toHaveCount(1);
  // Check the published form itself, not just the article name.
  for (const part of ['VerifyFormPanel', 'VerifyFormSingleLineText', 'VerifyFormRichText', 'VerifyFormSubmitButton']) {
    expect(await web.verifyElementPresent('Assertion_PageObjects/' + part, 30, 'OPTIONAL'), part + ' on the published form').toBeTruthy();
  }
};
