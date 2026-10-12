// Upgrade Suite - converted from Katalon: Test Suites/UpgradeSuite
// All 43 test cases in one suite: a login check first, then the 42 Katalon suite tests
// in the same order as Katalon. They run one after another (workers: 1). Some tests use values
// saved by earlier ones (for example the article or form name), so run the whole suite, or run
// the earlier test first when you run one on its own.
// The same 43 test cases are also in tests/ as separate files (01-... to 43-...). This suite is
// the Playwright project "suite"; the separate files are the project "testcases".
//
// Whole suite:       npm run suite             (npx playwright test --project=suite)
// Watch the browser: npm run suite -- --headed
// One test:          npx playwright test --project=suite -g "TC9757"
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test.describe('UpgradeSuite', () => {
  // 1. Login - site
  // Checks the login and MFA work against the site in the current profile.
  test('Login - site', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Common_TestCases/Login - site');
  });

  // 2. TC9736 - Deactivate Article
  // It logs in, creates an article in Elcom_Automation_Folder, publishes it, then deactivates it
  // and checks the status shows "Inactive".
  test('TC9736 - Deactivate Article', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9736 - Deactivate Article');
  });

  // 3. TC9737 - Add a Comment Article element
  // It logs in, creates an article in Elcom_Automation_Folder, adds a Comments element
  // (pagination, profile pictures and comment votes on), publishes it and checks "Comments"
  // shows.
  test('TC9737 - Add a Comment Article element', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9737 - Add a Comment Article element');
  });

  // 4. TC9738 - Add a Content Editor Article element
  // It logs in, creates an article in Elcom_Automation_Folder, adds a Content Editor element
  // with some text, publishes it and checks "Content Editor" shows.
  test('TC9738 - Add a Content Editor Article element', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9738 - Add a Content Editor Article element');
  });

  // 5. TC9739 - Add a Document List article element
  // It logs in, creates an article in Elcom_Automation_Folder, adds a Document List element (100
  // documents, File Icon and File Name fields, current folder included), publishes it and checks
  // "Type File" shows.
  test('TC9739 - Add a Document List article element', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9739 - Add a Document List article element');
  });

  // 6. TC9740 - Add a Dynamic widget
  // It logs in, creates an article in Elcom_Automation_Folder, adds a Dynamic Widget element
  // (articles and documents, 50 items, start dates shown), publishes it and checks "Dynamic
  // widget" shows.
  test('TC9740 - Add a Dynamic widget', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9740 - Add a Dynamic widget');
  });

  // 7. TC9741 - Add a People element
  // It logs in, creates an article in Elcom_Automation_Folder, adds a People element (selected
  // group, last name first, email shown, 10 per page), publishes it and checks the article name
  // shows.
  test('TC9741 - Add a People element', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9741 - Add a People element');
  });

  // 8. TC9742 - Add a Search Article element
  // It logs in, creates an article in Elcom_Automation_Folder, adds a Search element
  // (description shown, searching articles), publishes it and checks the article name shows.
  test('TC9742 - Add a Search Article element', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9742 - Add a Search Article element');
  });

  // 9. TC9743 - Add the taxonomy Search element
  // It logs in, creates an article in Elcom_Automation_Folder, adds a Taxonomy Search element
  // with a heading, publishes it and checks "Taxonomy Search" shows.
  test('TC9743 - Add the taxonomy Search element', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9743 - Add the taxonomy Search element');
  });

  // 10. TC9744 - Create a Folder Explorer
  // It logs in, creates an article in Elcom_Automation_Folder, adds a Folder Explorer element
  // pointing at Elcom_Sub_Folder (articles and documents, all folder and content actions on),
  // and checks "Folder Explorer" shows.
  test('TC9744 - Create a Folder Explorer', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9744 - Create a Folder Explorer');
  });

  // 11. TC9745 - Delete Article
  // It logs in, creates an article in Elcom_Automation_Folder, then deletes it.
  test('TC9745 - Delete Article', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9745 - Delete Article');
  });

  // 12. TC9746 - Event Quick Search Element
  // It logs in, creates an article in Elcom_Automation_Folder, adds an Event Quick Search
  // element, publishes the article and checks the article name shows.
  test('TC9746 - Event Quick Search Element', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9746 - Event Quick Search Element');
  });

  // 13. TC9747 - Add a Form with Panel
  // It logs in, creates an article in Elcom_Automation_Folder, adds a Form element with a panel
  // and fields, sets the email options, publishes it and checks the article name shows.
  test('TC9747 - Add a Form with Panel', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Form Test cases/TC9747 - Add a Form with Panel');
  });

  // 14. TC9748 - Add an image through regular upload
  // It logs in, opens Image Manager, uploads a time-stamped copy of KatalonTestImage2.jpg to
  // Elcom_Automation_Folder with alt text, and checks the image name shows.
  test('TC9748 - Add an image through regular upload', async ({ page }) => {
    await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9748 - Add an image through regular upload');
  });

  // 15. TC9749 - Search for an image
  // It logs in, opens Image Manager, searches for "KatalonTestImage" and checks a matching image
  // shows. Needs at least one KatalonTestImage image on the site - run
  // tests/add-image-regular-upload.spec.js first if there are none.
  test('TC9749 - Search for an image', async ({ page }) => {
    await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9749 - Search for an image');
  });

  // 16. TC9758 - Restore an image to previous version
  // It logs in, opens Image Manager, finds a "KatalonTestImage" image, renames its title to
  // "KatalonTestImage- Edit", publishes, then restores the previous version from History. Needs
  // at least one KatalonTestImage image on the site - run tests/add-image-regular-upload.spec.js
  // first if there are none.
  test('TC9758 - Restore an image to previous version', async ({ page }) => {
    await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9758 - Restore an image to previous version');
  });

  // 17. TC9754 - Add a document through regular upload
  // It logs in, opens Document Manager, uploads a time-stamped copy of "Test Automation
  // doc.docx" to Elcom_Automation_Folder with a title and description, and checks the document
  // shows.
  test('TC9754 - Add a document through regular upload', async ({ page }) => {
    await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9754 - Add a document through regular upload');
  });

  // 18. TC9753 - Search for a document
  // It logs in, opens Document Manager, searches for "Test Automation doc" and checks a matching
  // document shows. Needs at least one "Test Automation doc" document on the site - run
  // tests/add-document-regular-upload.spec.js first if there are none.
  test('TC9753 - Search for a document', async ({ page }) => {
    await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9753 - Search for a document');
  });

  // 19. TC9750 - Delete image not in use
  // It logs in, opens Image Manager, searches for "KatalonTestImage" and deletes the first
  // result. Needs at least one KatalonTestImage image on the site - run
  // tests/add-image-regular-upload.spec.js first if there are none.
  test('TC9750 - Delete image not in use', async ({ page }) => {
    await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9750 - Delete image not in use');
  });

  // 20. TC9751 - Multiple Image Upload
  // It logs in, opens Image Manager's Upload Multiple Images tab, uploads time-stamped copies of
  // Automation Image 1-3.png to Elcom_Automation_Folder with alt text, then searches for
  // "Automation" and checks a result shows.
  test('TC9751 - Multiple Image Upload', async ({ page }) => {
    await callTestCase(new WebUI(page), 'ImageManagerr_Testcases/TC9751 - Multiple Image Upload');
  });

  // 21. TC9759 - Restore a document to previous version
  // Runs only DocumentManager_TestCases/TC9759 - Restore a document to previous version. It logs
  // in, opens Document Manager, finds a "Test Automation doc" document, renames its title to
  // "Test Automation doc - EDIT", publishes, then restores the previous version from History.
  // Needs at least one "Test Automation doc" document on the site - run
  // tests/add-document-regular-upload.spec.js first if there are none.
  test('TC9759 - Restore a document to previous version', async ({ page }) => {
    await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9759 - Restore a document to previous version');
  });

  // 22. TC9752 - Delete a document not in use
  // It logs in, opens Document Manager, searches for "Test Automation doc", checks the first
  // result is marked "not in use" and deletes it. Needs at least one "Test Automation doc"
  // document on the site - run tests/add-document-regular-upload.spec.js first if there are
  // none.
  test('TC9752 - Delete a document not in use', async ({ page }) => {
    await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9752 - Delete a document not in use');
  });

  // 23. TC9755 - Multiple document Upload
  // It logs in, opens Document Manager's multiple upload tab, uploads time-stamped copies of
  // Test Automation Doc 1-3.docx to Elcom_Automation_Folder with descriptions, then searches for
  // "Test Automation Doc" and checks a result shows.
  test('TC9755 - Multiple document Upload', async ({ page }) => {
    await callTestCase(new WebUI(page), 'DocumentManager_TestCases/TC9755 - Multiple document Upload');
  });

  // 24. TC9756 - Edit article
  // It logs in, creates an article in Elcom_Automation_Folder with an end date, adds a Content
  // Editor element and publishes, then edits the article attributes (a later end date) and
  // publishes again.
  test('TC9756 - Edit article', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Article Testcases/TC9756 - Edit article');
  });

  // 25. TC9760 - Recycle bin image manager
  // It logs in, opens the Recycle Bin, filters to images named "KatalonTestImage", selects them
  // and restores. Needs a deleted KatalonTestImage image in the Recycle Bin - run
  // tests/delete-image-not-in-use.spec.js first if there is none.
  test('TC9760 - Recycle bin image manager', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Recyclebin_Testcase/TC9760 - Recycle bin image manager');
  });

  // 26. TC9761 - Recycle bin document manager
  // It logs in, opens the Recycle Bin, filters to documents named "Test", restores the first
  // one, then searches Document Manager for that document and checks it is back. Needs a deleted
  // document in the Recycle Bin - run tests/delete-document-not-in-use.spec.js first if there is
  // none.
  test('TC9761 - Recycle bin document manager', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Recyclebin_Testcase/TC9761 - Recycle bin document manager');
  });

  // 27. TC9762 - Recycle bin Folder
  // It logs in, creates a new folder with an article in it, deletes the folder, restores it from
  // the Recycle Bin, then searches for the folder and checks it is back.
  test('TC9762 - Recycle bin Folder', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Recyclebin_Testcase/TC9762 - Recycle bin Folder');
  });

  // 28. TC9763 - Recycle bin Article
  // It logs in, creates a new folder with an article in it, deletes the article, restores it
  // from the Recycle Bin, then searches for the article and checks it is back.
  test('TC9763 - Recycle bin Article', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Recyclebin_Testcase/TC9763 - Recycle bin Article');
  });

  // 29. TC9757 - Add New User with group
  // It logs in, adds a new user (email TestEmail<random>@elcom.com.au), adds it to a group, then
  // searches for that user and checks its email. The new user's username and password come from
  // the "Add new user with group" sheet of the login details Excel file on the R drive (see
  // README "Login details"); the password must be encrypted. Connect to the VPN first.
  test('TC9757 - Add New User with group', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Security_TestCases/TC9757 - Add New User with group');
  });

  // 30. TC9765 - Add Folder
  // It logs in, opens Publishing > Folders, adds a new folder "TestFolderQA<number>" under
  // Elcom_Automation_Folder, and checks the new folder name shows on the page.
  test('TC9765 - Add Folder', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Folder_TestCases/TC9765 - Add Folder');
  });

  // 31. TC9766 - Add_Folder_Via_QuickLink
  // It logs in, makes sure Quick Add > Add Folder is switched on in Global Site Settings
  // (TC9775), then on the site uses Quick Add > Add Folder to create
  // "Elcom_QuickAdd_Folder<number>" under Elcom_Automation_Folder and checks the new folder name
  // shows.
  test('TC9766 - Add_Folder_Via_QuickLink', async ({ page }) => {
    await callTestCase(new WebUI(page), 'GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink');
  });

  // 32. TC9767 - Edit Folder And Publish
  // It first runs TC9765 - Add Folder (new folder "TestFolderQA<number>"), finds that folder
  // with Folder Search, opens Edit Folder, changes its user friendly URL to "<folder
  // name>updated1" and checks it in.
  test('TC9767 - Edit Folder And Publish', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Folder_TestCases/TC9767 - Edit Folder And Publish');
  });

  // 33. TC9768 - Add Acknowledgement
  // It logs in, creates an article in Elcom_Automation_Folder, adds an Acknowledge element
  // (three acknowledgement texts), publishes it, clicks Acknowledge on the published page and
  // checks the article shows.
  test('TC9768 - Add Acknowledgement', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Latest_Testcases/TC9768 - Add Acknowledgement');
  });

  // 34. TC9769 - Create_Form_with_Workflow
  // It logs in, creates an article in Elcom_Automation_Folder with a form (panel + three fields)
  // and publishes it, then creates a workflow "MaintainFormWorkflow<number>" for that form
  // (managers: Administrators, System, Web Master; basket "Manager"), opens the form, submits it
  // and checks the workflow shows. TC9770 - Approve_Form_Workflow and TC9772 -
  // Reject_Form_Workflow use the form and workflow this test creates, so run this first.
  test('TC9769 - Create_Form_with_Workflow', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Latest_Testcases/TC9769 - Create_Form_with_Workflow');
  });

  // 35. TC9770 - Approve_Form_Workflow
  // It first runs TC9769 - Create_Form_with_Workflow (new form + workflow, form submitted), then
  // opens the workflow Inbox, filters it to that form, opens the submission and approves it.
  test('TC9770 - Approve_Form_Workflow', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Latest_Testcases/TC9770 - Approve_Form_Workflow');
  });

  // 36. TC9777 - Create Event
  // It logs in, opens Maintain Events, adds an event "Katalon Test Event<number>" (location, end
  // date 31/07/2027, online registration on), saves it, searches for it and opens it.
  test('TC9777 - Create Event', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Latest_Testcases/TC9777 - Create Event');
  });

  // 37. TC9771 - FormWithCalculator
  // It logs in, creates an article in Elcom_Automation_Folder with a form (two text fields + a
  // "Result" calculator field that adds them), publishes it, enters 500 and 300 on the published
  // form and checks the result.
  test('TC9771 - FormWithCalculator', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Latest_Testcases/TC9771 - FormWithCalculator');
  });

  // 38. TC9772 - Reject_Form_Workflow
  // It first runs TC9769 - Create_Form_with_Workflow (new form + workflow, form submitted), then
  // opens the workflow Inbox, filters it to that form, opens the submission and rejects it.
  test('TC9772 - Reject_Form_Workflow', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Latest_Testcases/TC9772 - Reject_Form_Workflow');
  });

  // 39. TC9773 - Form_With_Form_Results
  // It logs in, creates an article with the calculator form (as TC9771) and publishes it, edits
  // the article to add a Form Results element for that form, then submits the form with 1000 and
  // 500.
  test('TC9773 - Form_With_Form_Results', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Latest_Testcases/TC9773 - Form_With_Form_Results');
  });

  // 40. TC9774 - Forgot password link and verify
  // It opens the login page, clicks "Forgot password", submits the form for
  // helpdesk@elcom.com.au, clicks "Back to site" and checks the address. Submitting the form may
  // email a reset link to that address.
  test('TC9774 - Forgot password link and verify', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Latest_Testcases/TC9774 - Forgot password link and verify');
  });

  // 41. TC9775 - Enable_QuickAdd_Folder_InGSS
  // It logs in, opens Admin > Global Site Settings > Quick Add, switches on Add Folder if it is
  // off, saves and checks "The Global Site Settings have been updated successfully."
  test('TC9775 - Enable_QuickAdd_Folder_InGSS', async ({ page }) => {
    await callTestCase(new WebUI(page), 'GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS');
  });

  // 42. TC9764 - Delete Folder
  // It logs in, adds a new folder "TestFolderQA<number>" under Elcom_Automation_Folder, checks
  // it is the selected folder, deletes it and checks its name is gone from the page.
  test('TC9764 - Delete Folder', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Folder_TestCases/TC9764 - Delete Folder');
  });

  // 43. TC9778 - Report generated for the specified date filter
  // Runs only Reports_TestCases/General/TC9778 - Report generated for the specified date filter.
  // It logs in, opens the Report Dashboard, picks the "Articles" report, sets the date filter
  // (valid from 9 days ago) and clicks View on Screen, then checks the report has a first row.
  test('TC9778 - Report generated for the specified date filter', async ({ page }) => {
    await callTestCase(new WebUI(page), 'Reports_TestCases/General/TC9778 - Report generated for the specified date filter');
  });
});
