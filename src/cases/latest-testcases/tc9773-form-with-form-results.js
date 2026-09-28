// Converted from Katalon test case: Test Cases/Latest_Testcases/TC9773 - Form_With_Form_Results
// Original script: Scripts/Latest_Testcases/TC9773 - Form_With_Form_Results/Script1723177793420.groovy
const { expect } = require('@playwright/test');
const { G, nanoTime } = require('../../helpers');

module.exports = async function run(web) {
  const { callTestCase } = require('../index');
  await callTestCase(web, 'Common Testcases _Articles_Forms/Folder Creation - Add Article');
  let FormWithFormResult = 'Form with Form Result' + nanoTime();
  G.CurrentFormNameWorkflow = FormWithFormResult;
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1', FormWithFormResult);
  await web.setText('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4', '');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxstrP_b489c1');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/input_ctl00ContentPlaceHolderMainNoAjaxtxtU_c30dc4');
  await web.setText('Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/Brief description', 'Create a form with Result');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Article Attributes - Elcom_Automation__77e2de/a_Draft');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Select Content Template - Elcom_Automa_6244da/input_ctl00ContentPlaceHolderMainNoAjaxbtnS_dfc885');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/PlusButton');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Form');
  // Groovy helper "hoverAndJsClick" is provided by the shared library.
  await web.hoverAndJsClick('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/span_Click to edit', 'Forms_PageObjects/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/editthis');
  // The calculator form is built as in TC9771, with the same form designer fixes:
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
  // Two text fields, then the calculator. Each new field opens with its caption box
  // (directedit_newN) in edit mode: wait for it, and press Tab to leave it for the text fields
  // (otherwise the next Form Items click only closes that box). The calculator's caption box is
  // left open for the "Result" caption.
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
  await web.scrollToElement('Latest test objects/Page_Edit Module  Deployment Site/a_OK (2)', 10);
  // "Fields referenced" is a multi-select list: Katalon's option clicks added to the selection,
  // a Playwright click replaces it. Select both number fields at once.
  await web.find('Latest test objects/Form result Mouseover/Click Option value');
  await web.page.locator("select[data-propname='FieldsReferenced']:visible").first().selectOption([{ index: 0 }, { index: 1 }]);
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/a_OK (2)');
  // Wait for the designer to reload after "Save Designer Changes" before publishing (publishing
  // earlier saves every field a second time), then wait for Publish to leave the editor page.
  const reloaded = web.page.waitForResponse((r) => /GetExistingFields/i.test(r.url()), { timeout: 60 * 1000 });
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Click to edit_ctl07ctl07easyCommit (2)');
  await reloaded;
  await web.delay(2);
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input__PublishButton (3)');
  await web.page.waitForURL((u) => !/EditModule\.aspx/i.test(u.href), { timeout: 60 * 1000 });
  await web.click('Latest test objects/Form result Mouseover/Click Edit');
  await web.click('Form_Page_Objects/Forms Object/Form FIeld Submission/Page_Edit Article Form field Submission - E_1212d7/PlusButton');
  await web.click('Latest test objects/Page_Edit Article Form with Form Result2555_f10f46/span_Form Results');
  await web.executeJavaScript('window.scrollTo(0, 600);', null);
  await web.hoverAndJsClick('Latest test objects/Form result Mouseover/Form result Mouseover', 'Latest test objects/Form result Mouseover/MouseHoverClick');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/div_function toggleDiv(img, objname, numMod_973cde');
  await web.setText('Latest test objects/Page_Edit Module  Deployment Site/input__ctl07txtNoOfFormItems', '100');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input__ctl07txtNoItemsPerPage');
  await web.setText('Latest test objects/Page_Edit Module  Deployment Site/input__ctl07txtNoItemsPerPage', '10');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/legend_Actions');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_General_ctl07blnViewFullDetails');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/div_Display link to edit form submissions b_7aed44');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Editing_ctl07blnLinkToEdit');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Display link to edit form submissions_2840f8');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Copying_ctl07blnLinkToCopy');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/div_Display link to delete form submissions_50f5ad');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Deleting_ctl07blnLinkToDelete');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Draft mode_ctl07blnLinkToCompleteDraft');
  await web.selectOptionByLabel('Latest test objects/Page_Edit Module  Deployment Site/select_Add a Calendar Item from FormCustom _a32a2e', G.CurrentFormNameWorkflow, false);
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Single Line Text_ctl07grdFieldsctl02b_4438b2');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Checkbox List_ctl07grdFieldsctl03blnSelected');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Dropdown_ctl07grdFieldsctl04blnSelected');
  await web.click('Latest test objects/Page_Edit Module  Deployment Site/input_Notes_PublishButton');
  await web.setText('Latest test objects/Page_Form with Calculator2477242731870400  _0b398d/input_Single Line Text_UserField1109_24034', '1000');
  await web.setText('Latest test objects/Page_Form with Calculator2477242731870400  _0b398d/input_Enter Second Number_UserField1109_24035', '500');
  await web.scrollToElement('Latest test objects/Page_Form with Calculator2477242731870400  _0b398d/nav_Section Menu', 2);
  // The calculation runs when the second number field is left; check Result = 1000 + 500.
  await web.page.keyboard.press('Tab');
  await expect.poll(async () => (await web.find('Assertion_PageObjects/Form Calculator Result')).inputValue(),
    { timeout: 30 * 1000, message: 'Result shows 1000 + 500' }).toMatch(/^1500(\.0+)?$/);
  // Submit the form (this object was "the second blue button", which was Submit when recorded).
  await web.click('Latest test objects/Page_Form with Calculator2477242731870400  _0b398d/div_Result');
  await web.sleep(3000);
  await web.acceptAlert();
  let url = await web.getUrl();
  await web.navigateToUrl(url);
  await web.scrollToElement('Latest test objects/Page_Form with Calculator2477242731870400  _0b398d/div_Result',2);
  // Not in the original Katalon script: the Form Results list on the page must now show the
  // submission (its Result value 1500).
  const results = web.page.locator('#tableFormResults');
  await expect(results, 'Form Results lists the submission').toContainText(/1500(\.0+)?/, { timeout: 30 * 1000 });
  console.log('Print <<<<<<<<<<<<<<<<<< Form Results shows the 1000 + 500 = 1500 submission >>>>>>>>>>>>>>>>>>>>>>>>>>>>');
};
