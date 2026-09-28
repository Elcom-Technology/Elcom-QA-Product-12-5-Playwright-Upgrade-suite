// Upgrade Suite - converted from Katalon: Test Suites/UpgradeSuite
// The tests run one after another in the same order as the Katalon suite. Some tests
// use values saved by earlier ones (for example the article or form name), so run the
// whole file, or run the earlier test first when you run one on its own.
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

const UPGRADE_SUITE = [
  'Article Testcases/TC9736 - Deactivate Article',
  'Article Testcases/TC9737 - Add a Comment Article element',
  'Article Testcases/TC9738 - Add a Content Editor Article element',
  'Article Testcases/TC9739 - Add a Document List article element',
  'Article Testcases/TC9740 - Add a Dynamic widget',
  'Article Testcases/TC9741 - Add a People element',
  'Article Testcases/TC9742 - Add a Search Article element',
  'Article Testcases/TC9743 - Add the taxonomy Search element',
  'Article Testcases/TC9744 - Create a Folder Explorer',
  'Article Testcases/TC9745 - Delete Article',
  'Article Testcases/TC9746 - Event Quick Search Element',
  'Form Test cases/TC9747 - Add a Form with Panel',
  'ImageManagerr_Testcases/TC9748 - Add an image through regular upload',
  'ImageManagerr_Testcases/TC9749 - Search for an image',
  'ImageManagerr_Testcases/TC9758 - Restore an image to previous version',
  'DocumentManager_TestCases/TC9754 - Add a document through regular upload',
  'DocumentManager_TestCases/TC9753 - Search for a document',
  'ImageManagerr_Testcases/TC9750 - Delete image not in use',
  'ImageManagerr_Testcases/TC9751 - Multiple Image Upload',
  'DocumentManager_TestCases/TC9759 - Restore a document to previous version',
  'DocumentManager_TestCases/TC9752 - Delete a document not in use',
  'DocumentManager_TestCases/TC9755 - Multiple document Upload',
  'Article Testcases/TC9756 - Edit article',
  'Recyclebin_Testcase/TC9760 - Recycle bin image manager',
  'Recyclebin_Testcase/TC9761 - Recycle bin document manager',
  'Recyclebin_Testcase/TC9762 - Recycle bin Folder',
  'Recyclebin_Testcase/TC9763 - Recycle bin Article',
  'Security_TestCases/TC9757 - Add New User with group',
  'Folder_TestCases/TC9765 - Add Folder',
  'GlobalSiteSettings_TestCases/TC9766 - Add_Folder_Via_QuickLink',
  'Folder_TestCases/TC9767 - Edit Folder And Publish',
  'Latest_Testcases/TC9768 - Add Acknowledgement',
  'Latest_Testcases/TC9769 - Create_Form_with_Workflow',
  'Latest_Testcases/TC9770 - Approve_Form_Workflow',
  'Latest_Testcases/TC9777 - Create Event',
  'Latest_Testcases/TC9771 - FormWithCalculator',
  'Latest_Testcases/TC9772 - Reject_Form_Workflow',
  'Latest_Testcases/TC9773 - Form_With_Form_Results',
  'Latest_Testcases/TC9774 - Forgot password link and verify',
  'GlobalSiteSettings_TestCases/TC9775 - Enable_QuickAdd_Folder_InGSS',
  'Folder_TestCases/TC9764 - Delete Folder',
  'Reports_TestCases/General/TC9778 - Report generated for the specified date filter',
];

test.describe('UpgradeSuite', () => {
  for (const name of UPGRADE_SUITE) {
    const title = name.split('/').pop();
    test(title, async ({ page }) => {
      const web = new WebUI(page);
      await callTestCase(web, name);
    });
  }
});
