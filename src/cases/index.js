// Registry of converted Katalon test cases, keyed by their Katalon name.
// callTestCase(web, name) is the replacement for WebUI.callTestCase(findTestCase(name), ...).
const CASES = {
  'Article Testcases/TC9736 - Deactivate Article': () => require('./article-testcases/tc9736-deactivate-article'),
  'Article Testcases/TC9737 - Add a Comment Article element': () => require('./article-testcases/tc9737-add-a-comment-article-element'),
  'Article Testcases/TC9738 - Add a Content Editor Article element': () => require('./article-testcases/tc9738-add-a-content-editor-article-element'),
  'Article Testcases/TC9739 - Add a Document List article element': () => require('./article-testcases/tc9739-add-a-document-list-article-element'),
  'Article Testcases/TC9740 - Add a Dynamic widget': () => require('./article-testcases/tc9740-add-a-dynamic-widget'),
  'Article Testcases/TC9741 - Add a People element': () => require('./article-testcases/tc9741-add-a-people-element'),
  'Article Testcases/TC9742 - Add a Search Article element': () => require('./article-testcases/tc9742-add-a-search-article-element'),
  'Article Testcases/TC9743 - Add the taxonomy Search element': () => require('./article-testcases/tc9743-add-the-taxonomy-search-element'),
  'Article Testcases/TC9744 - Create a Folder Explorer': () => require('./article-testcases/tc9744-create-a-folder-explorer'),
  'Article Testcases/TC9745 - Delete Article': () => require('./article-testcases/tc9745-delete-article'),
  'Article Testcases/TC9746 - Event Quick Search Element': () => require('./article-testcases/tc9746-event-quick-search-element'),
  'Form Test cases/TC9747 - Add a Form with Panel': () => require('./form-test-cases/tc9747-add-a-form-with-panel'),
  'ImageManagerr_Testcases/TC9748 - Add an image through regular upload': () => require('./imagemanagerr-testcases/tc9748-add-an-image-through-regular-upload'),
  'ImageManagerr_Testcases/TC9749 - Search for an image': () => require('./imagemanagerr-testcases/tc9749-search-for-an-image'),
  'ImageManagerr_Testcases/TC9758 - Restore an image to previous version': () => require('./imagemanagerr-testcases/tc9758-restore-an-image-to-previous-version'),
  'DocumentManager_TestCases/TC9754 - Add a document through regular upload': () => require('./documentmanager-testcases/tc9754-add-a-document-through-regular-upload'),
  'DocumentManager_TestCases/TC9753 - Search for a document': () => require('./documentmanager-testcases/tc9753-search-for-a-document'),
  'ImageManagerr_Testcases/TC9750 - Delete image not in use': () => require('./imagemanagerr-testcases/tc9750-delete-image-not-in-use'),
  'ImageManagerr_Testcases/TC9751 - Multiple Image Upload': () => require('./imagemanagerr-testcases/tc9751-multiple-image-upload'),
  'DocumentManager_TestCases/TC9759 - Restore a document to previous version': () => require('./documentmanager-testcases/tc9759-restore-a-document-to-previous-version'),
  'DocumentManager_TestCases/TC9752 - Delete a document not in use': () => require('./documentmanager-testcases/tc9752-delete-a-document-not-in-use'),
  'DocumentManager_TestCases/TC9755 - Multiple document Upload': () => require('./documentmanager-testcases/tc9755-multiple-document-upload'),
  'Article Testcases/TC9756 - Edit article': () => require('./article-testcases/tc9756-edit-article'),
  'Recyclebin_Testcase/TC9760 - Recycle bin image manager': () => require('./recyclebin-testcase/tc9760-recycle-bin-image-manager'),
  'Recyclebin_Testcase/TC9761 - Recycle bin document manager': () => require('./recyclebin-testcase/tc9761-recycle-bin-document-manager'),
  'Recyclebin_Testcase/TC9762 - Recycle bin Folder': () => require('./recyclebin-testcase/tc9762-recycle-bin-folder'),
  'Recyclebin_Testcase/TC9763 - Recycle bin Article': () => require('./recyclebin-testcase/tc9763-recycle-bin-article'),
  'Security_TestCases/TC9757 - Add New User with group': () => require('./security-testcases/tc9757-add-new-user-with-group'),
  'Folder_TestCases/TC9765 - Add Folder': () => require('./folder-testcases/tc9765-add-folder'),
  'GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink': () => require('./globalsitesettings-testcases/tc9766-add-folder-via-quicklink'),
  'Folder_TestCases/TC9767 - Edit Folder And Publish': () => require('./folder-testcases/tc9767-edit-folder-and-publish'),
  'Latest_Testcases/TC9768 - Add Acknowledgement': () => require('./latest-testcases/tc9768-add-acknowledgement'),
  'Latest_Testcases/TC9769 - Create_Form_with_Workflow': () => require('./latest-testcases/tc9769-create-form-with-workflow'),
  'Latest_Testcases/TC9770 - Approve_Form_Workflow': () => require('./latest-testcases/tc9770-approve-form-workflow'),
  'Latest_Testcases/TC9777 - Create Event': () => require('./latest-testcases/tc9777-create-event'),
  'Latest_Testcases/TC9771 - FormWithCalculator': () => require('./latest-testcases/tc9771-formwithcalculator'),
  'Latest_Testcases/TC9772 - Reject_Form_Workflow': () => require('./latest-testcases/tc9772-reject-form-workflow'),
  'Latest_Testcases/TC9773 - Form_With_Form_Results': () => require('./latest-testcases/tc9773-form-with-form-results'),
  'Latest_Testcases/TC9774 - Forgot password link and verify': () => require('./latest-testcases/tc9774-forgot-password-link-and-verify'),
  'GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS': () => require('./globalsitesettings-testcases/tc9775-enable-quickadd-folder-ingss'),
  'Folder_TestCases/TC9764 - Delete Folder': () => require('./folder-testcases/tc9764-delete-folder'),
  'Reports_TestCases/General/TC9778 - Report generated for the specified date filter': () => require('./reports-testcases/general/tc9778-report-generated-for-the-specified-date-filter'),
  'Common Testcases _Articles_Forms/Folder Creation - Add Article': () => require('./common-testcases-articles-forms/folder-creation-add-article'),
  'Common_TestCases/Login - site': () => require('./common-testcases/login-site'),
  'Common_TestCases/CreateFolder': () => require('./common-testcases/createfolder'),
  'Security_TestCases/Login': () => require('./security-testcases/login'),
};

async function callTestCase(web, name) {
  const load = CASES[name];
  if (!load) throw new Error(`Unknown Katalon test case: ${name}`);
  console.log(`--- ${name}`);
  return load()(web);
}

module.exports = { CASES, callTestCase };
