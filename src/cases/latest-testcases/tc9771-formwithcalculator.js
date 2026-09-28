// Converted from Katalon test case: Test Cases/Latest_Testcases/TC9771 - FormWithCalculator
// Original script: Scripts/Latest_Testcases/TC9771 - FormWithCalculator/Script1723099127990.groovy
const { expect } = require('@playwright/test');
const { G, containsIgnoreCase, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  let FormNameWorkflow = 'Form with Calculator' + nanoTime();
  G.CurrentFormNameWorkflow = FormNameWorkflow;
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', FormNameWorkflow);
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Create a form with Calculator');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnS_dfc885');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/PlusButton');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Form');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Click to edit', 'Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/editthis');
  // Same form designer fixes as TC9747 / TC9769:
  // - 5s (as in Katalon) is too short for the form settings page on the dev server;
  // - let the designer finish loading before Create Form, then wait for it to reload its data
  //   (GetExistingFields) after Create Form so Form Items clicks are not lost.
  if (await web.verifyElementPresent('Form_Page_Objects/Forms Object/Form with Panel/CreateForm', 30, 'OPTIONAL')) {
    await web.page.waitForLoadState('networkidle').catch(() => {});
    const designerReady = web.page.waitForResponse((r) => /GetExistingFields/i.test(r.url()), { timeout: 60 * 1000 });
    await web.click('Form_Page_Objects/Forms Object/Form with Panel/CreateForm', 'OPTIONAL');
    await designerReady;
    await web.delay(1);
  } else {
    await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Module - Elcom_Automation_Folder _1a3284/i_fa fa-font');
  }
  // Two text fields (the two numbers), then the calculator. The designer numbers new items
  // new0, new1, new2...; a click made while it is still adding the previous item is lost, so
  // wait for each item's caption box (directedit_newN) before the next click.
  // A new field opens with its caption box (directedit_newN) in edit mode. For the text fields
  // press Tab to leave it - otherwise the next Form Items click only closes that edit box. The
  // calculator's caption box is left open, because the next step types its caption "Result".
  const added = async (n, leaveEditing = true) => {
    await web.page.locator('#directedit_new' + n).waitFor({ state: 'attached', timeout: 30 * 1000 });
    if (leaveEditing) {
      await web.page.keyboard.press('Tab');
      await web.delay(1);
    }
  };
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/i_Form Items_fa fa-font (1) (1) (1)');
  await added(0);
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/i_Form Items_fa fa-font (1) (1) (1)');
  await added(1);
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/i_Checkbox list_fa fa-calculator (2)');
  await added(2, false);
  await web.setText('Latest test objects/Page_Edit Module  Deployment Site/input_Click to edit_directedit_new2 (1) (1)', 'Result');
  await web.click('Latest test objects/Form result Mouseover/Click Calc');
  await web.hoverAndJsClick('Forms_PageObjects/Form cal mousehover/Cal MouseHover', 'Latest test objects/Page_Edit Module  Deployment Site/span_Click to edit');
  await web.executeJavaScript('window.scrollTo(0, 999999);', null);
  // "Fields referenced" is a multi-select list. Katalon's option clicks added to the selection;
  // a Playwright click replaces it (only the second field was used: Result = 300). Select both
  // number fields at once.
  await web.find('Latest test objects/Form result Mouseover/Click Option value');
  await web.page.locator("select[data-propname='FieldsReferenced']:visible").first().selectOption([{ index: 0 }, { index: 1 }]);
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/a_OK (2)');
  // "Save Designer Changes" reloads the designer in place; publishing before that reload has
  // finished saves every field a second time. Wait for it, then publish and wait for Publish
  // to leave the editor page.
  const reloaded = web.page.waitForResponse((r) => /GetExistingFields/i.test(r.url()), { timeout: 60 * 1000 });
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Click to edit_ctl07ctl07easyCommit (2)');
  await reloaded;
  await web.delay(2);
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input__PublishButton (3)');
  await web.page.waitForURL((u) => !/EditModule\.aspx/i.test(u.href), { timeout: 60 * 1000 });
  await web.setText('Latest test objects/Page_Form with Calculator2477242731870400  _0b398d/input_Single Line Text_UserField1109_24034', '500');
  await web.setText('Latest test objects/Page_Form with Calculator2477242731870400  _0b398d/input_Enter Second Number_UserField1109_24035', '300');
  await web.executeJavaScript('window.scrollTo(0, 600);', null);
  // The calculation runs when the second number field is left; check Result = 500 + 300.
  await web.page.keyboard.press('Tab');
  await expect.poll(async () => (await web.find('Assertion_PageObjects/Form Calculator Result')).inputValue(),
    { timeout: 30 * 1000, message: 'Result shows 500 + 300' }).toMatch(/^800(\.0+)?$/);
  console.log('Print <<<<<<<<<<<<<<<<<< Result = ' + await (await web.find('Assertion_PageObjects/Form Calculator Result')).inputValue() + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  // Submit the form (this object was "the second blue button", which was Submit when recorded).
  await web.click('Latest test objects/Page_Form with Calculator2477242731870400  _0b398d/div_Result');
  await web.acceptAlert();
  let Verify = await web.getText('Assertion_PageObjects/Verify Form Calculator');
  console.log('Print <<<<<<<<<<<<<<<<<<' + Verify + '>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
  expect(containsIgnoreCase(Verify, "Form with Calculator")).toBeTruthy();
};
