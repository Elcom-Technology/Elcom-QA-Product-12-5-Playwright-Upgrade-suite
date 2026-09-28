# Elcom 12.5 Upgrade Suite – Playwright

> Portions of this document and code were generated using an AI tool.

This is the Katalon **UpgradeSuite** (`Test Suites/UpgradeSuite`, 42 test cases) converted to Playwright (JavaScript). Only the Upgrade Suite and the test cases it calls were converted; the other Katalon suites were left out.

## Setup (once)

1. Open this folder in VS Code (**File → Open Folder**).
2. In the terminal run:
   ```
   npm install
   npx playwright install chromium
   ```
3. Set up the login details file (see **Login details** below).

### New team member (after cloning from git)

Some files are not in git on purpose (see `.gitignore`). Each person creates them on their own machine:

| Not in git | What to do |
|---|---|
| `node_modules/` | `npm install` (also downloads the Chromium browser) |
| `.env` | Nothing – optional, only to change the defaults (copy `.env.example`). |
| Encryption key | Nothing – read from the R drive (connect to the VPN). |
| Login details Excel | Nothing to copy if the network share `\\192.168.2.25\Common\QA\Katalon-Data` is reachable. Otherwise ask the lead for the file and set `ELCOM_CREDENTIALS_FILE` in `.env`. |
| `.state/`, `test-results/`, `playwright-report/` | Nothing – created automatically by each run. |

Check it works: `npx playwright test tests/login.spec.js --headed`

## Login details

The username and password are read from an Excel file, as in Katalon. The file is never copied into the project.

**Which file is used** (first match wins):
1. `ELCOM_CREDENTIALS_FILE=<full path to the .xlsx>` in `.env`.
2. `"credentialsfile"` in the profile. `profiles/default.json` (ec12-5) points at the Katalon data file `\\192.168.2.25\Common\QA\Katalon-Data\ec12-5-dev-profile - ADMIN.xlsx`, so the network share must be reachable.
3. `C:\Users\<you>\ElcomAutomation\LoginDetails.xlsx` on your machine. `npm run create-login-file` creates it with placeholder values (it never overwrites an existing file).

**Layouts understood** (first sheet):
- **Katalon style** (the files on the share): labels in column A, values in column B.

  | A | B |
  |---|---|
  | username | … |
  | password | … |
  | totpsecret | optional, only if the site asks for MFA |
  | newuserpassword | optional – password for the user TC9757 creates; if missing, a random one that meets the site's password rules is made for each run |

- **Table style** (the local file): a header row `Profile | Username | Password | TOTPSecret | NewUserPassword`, then one row per profile. The row whose `Profile` matches `PROFILE` is used (`default` when `PROFILE` is not set).

**The password must be encrypted.** The password cell holds `ENC:v1:…` text, not the password itself. The tests decrypt it just before logging in; a plain password stops the run with a message. (`totpsecret` and `newuserpassword` may be encrypted the same way; plain values are still accepted for those two.)

1. `npm run create-key` – once for the whole team. Creates the key file on the R drive (`credentialskeyfile` in the profile, default `\\192.168.2.25\Common\QA\Katalon-Data\credentials.key`; or `ELCOM_CREDENTIALS_KEY_FILE` in `.env`). The key is never printed and never stored on anyone's machine; the VPN must be connected to run tests.
2. `npm run encrypt-password` – type the password twice (it is hidden). It prints the `ENC:v1:…` text.
3. Paste that text into the password cell of the login details file and save.

The encryption is AES-256-GCM. The key is kept apart from the Excel file, so the file alone does not reveal the password. Team members need nothing extra: the key and the login file are both read from the R drive, so connecting to the VPN is enough. If the key file is lost, run steps 1–3 again.

Never copy a login details file or the key into the project folder, OneDrive or email.

Note: a Playwright trace (`trace.zip`, kept for failed tests) records the values typed into fields, including the decrypted password. Do not share traces outside the team.

## Running

| What | Command |
|---|---|
| Whole suite | `npx playwright test` |
| Whole suite, watch the browser | `npx playwright test --headed` |
| One test | `npx playwright test -g "TC9765"` |
| Another profile | `PROFILE=automation-115-to-120 npx playwright test` (PowerShell: `$env:PROFILE="automation-115-to-120"; npx playwright test`) |
| Open the report | `npx playwright show-report` |

Tests run one at a time, in the same order as the Katalon suite. Some tests use values saved by earlier ones (for example TC9745 deletes the article created before it, and TC9770/TC9772 use the workflow created by TC9769). When you run a single test, run the test it depends on first.

## How the project is organised

| Path | What it is | Katalon equivalent |
|---|---|---|
| `tests/upgrade-suite.spec.js` | The suite: the 42 tests in order | `Test Suites/UpgradeSuite` |
| `src/cases/` | One file per converted test case | `Scripts/` + `Test Cases/` |
| `src/cases/index.js` | `callTestCase(web, name)` | `WebUI.callTestCase(findTestCase(name))` |
| `src/objects.json` | Locators for the 503 test objects the suite uses | `Object Repository/` |
| `src/webui.js` | Katalon keywords (`click`, `setText`, `acceptAlert` …) on Playwright | `WebUI` |
| `src/helpers.js` | `G` (GlobalVariable), MFA code, file helpers | `GlobalVariable`, `Totp`, Groovy utilities |
| `profiles/*.json` | Execution profiles | `Profiles/*.glbl` |
| `resources/` | Images and documents used for upload tests | `Include/Resources` |

The converted files keep the same steps and the same object paths as the Groovy scripts, so each one can be compared side by side with the original. Every file starts with a comment naming the Katalon script it came from.

Katalon behaviour that was kept:
- **Self-healing:** if an object's main XPath finds nothing, the other locators Katalon recorded for it are tried, and a `[self-healing]` warning is printed.
- **Alerts:** alerts and confirm boxes are accepted automatically; `acceptAlert()` checks one really appeared.
- **Window/frame switching:** `switchToWindowIndex`, `closeWindowIndex`, `switchToFrame` and `switchToDefaultContent` work as before.
- **GlobalVariable:** `G.name` values are saved to `.state/globals.json` so later tests can read them. They are reset from the profile at the start of every run.

## Things found in the Katalon code

These were in the original scripts, not introduced by the conversion:

1. **TC9761 – Recycle bin document manager:** uses the object `Common_RB,RS,PB_PageObjects/Ec12/Document Manger/Recycle Bin/Click Recyclebin Object/Enter name filed to search Object/Enter Namer to search`, which does not exist in the Object Repository. It now uses `Common_RB,RS,PB_PageObjects/Click Recyclebin Object/Enter name filed to search Object/Enter Namer to search`, which has the same locator (`//input[@id='txtFilterName']`).
2. **TC9769 – Create_Form_with_Workflow:** `WebUI.wait(30)` is not a Katalon keyword. It is now `waitForAlert(30)`, because the next step accepts an alert. The same script also passed a text path to `waitForElementClickable` instead of `findTestObject(...)`; this now uses the object.
3. **TC9757 – Add New User with group:** the new user's password was written in the script. It now comes from `newuserpassword` in the login details file, or, if that is empty, a random password made for the run (nobody logs in as that user).
4. **Login:** the username, password and MFA secret came from an Excel file on a network share. They now come from a local Excel file (see **Login details**).
5. **Object Repository:** 4 `.rs` files contain unresolved Git merge-conflict markers (`<<<<<<< HEAD`). None of them are used by the Upgrade Suite, but they may break other Katalon suites.
6. **Uploads:** the Katalon scripts saved a timestamped copy of each upload file into `Include/Resources`, which is why that folder has dozens of copies. The copies now go to `test-results/uploads` instead.
7. **Profile `automation-115-to-120`:** it was missing `domainname` and a few other variables used by the suite. `domainname` was set to the profile's `url`; check this is the right site address.

## Before you rely on it

The conversion was checked for syntax, that every test case loads, and that every object path resolves to a locator. It has **not** been run against a live Elcom site yet, so expect to fix some steps on the first run, especially timing around page reloads, the rich-text editor iframe, and pop-up windows. When a step fails, the HTML report (`npx playwright show-report`) shows a screenshot, video and trace for it.

## Test list

| # | Test | File |
|---|---|---|
| 1 | TC9736 - Deactivate Article | `src/cases/article-testcases/tc9736-deactivate-article.js` |
| 2 | TC9737 - Add a Comment Article element | `src/cases/article-testcases/tc9737-add-a-comment-article-element.js` |
| 3 | TC9738 - Add a Content Editor Article element | `src/cases/article-testcases/tc9738-add-a-content-editor-article-element.js` |
| 4 | TC9739 - Add a Document List article element | `src/cases/article-testcases/tc9739-add-a-document-list-article-element.js` |
| 5 | TC9740 - Add a Dynamic widget | `src/cases/article-testcases/tc9740-add-a-dynamic-widget.js` |
| 6 | TC9741 - Add a People element | `src/cases/article-testcases/tc9741-add-a-people-element.js` |
| 7 | TC9742 - Add a Search Article element | `src/cases/article-testcases/tc9742-add-a-search-article-element.js` |
| 8 | TC9743 - Add the taxonomy Search element | `src/cases/article-testcases/tc9743-add-the-taxonomy-search-element.js` |
| 9 | TC9744 - Create a Folder Explorer | `src/cases/article-testcases/tc9744-create-a-folder-explorer.js` |
| 10 | TC9745 - Delete Article | `src/cases/article-testcases/tc9745-delete-article.js` |
| 11 | TC9746 - Event Quick Search Element | `src/cases/article-testcases/tc9746-event-quick-search-element.js` |
| 12 | TC9747 - Add a Form with Panel | `src/cases/form-test-cases/tc9747-add-a-form-with-panel.js` |
| 13 | TC9748 - Add an image through regular upload | `src/cases/imagemanagerr-testcases/tc9748-add-an-image-through-regular-upload.js` |
| 14 | TC9749 - Search for an image | `src/cases/imagemanagerr-testcases/tc9749-search-for-an-image.js` |
| 15 | TC9758 - Restore an image to previous version | `src/cases/imagemanagerr-testcases/tc9758-restore-an-image-to-previous-version.js` |
| 16 | TC9754 - Add a document through regular upload | `src/cases/documentmanager-testcases/tc9754-add-a-document-through-regular-upload.js` |
| 17 | TC9753 - Search for a document | `src/cases/documentmanager-testcases/tc9753-search-for-a-document.js` |
| 18 | TC9750 - Delete image not in use | `src/cases/imagemanagerr-testcases/tc9750-delete-image-not-in-use.js` |
| 19 | TC9751 - Multiple Image Upload | `src/cases/imagemanagerr-testcases/tc9751-multiple-image-upload.js` |
| 20 | TC9759 - Restore a document to previous version | `src/cases/documentmanager-testcases/tc9759-restore-a-document-to-previous-version.js` |
| 21 | TC9752 - Delete a document not in use | `src/cases/documentmanager-testcases/tc9752-delete-a-document-not-in-use.js` |
| 22 | TC9755 - Multiple document Upload | `src/cases/documentmanager-testcases/tc9755-multiple-document-upload.js` |
| 23 | TC9756 - Edit article | `src/cases/article-testcases/tc9756-edit-article.js` |
| 24 | TC9760 - Recycle bin image manager | `src/cases/recyclebin-testcase/tc9760-recycle-bin-image-manager.js` |
| 25 | TC9761 - Recycle bin document manager | `src/cases/recyclebin-testcase/tc9761-recycle-bin-document-manager.js` |
| 26 | TC9762 - Recycle bin Folder | `src/cases/recyclebin-testcase/tc9762-recycle-bin-folder.js` |
| 27 | TC9763 - Recycle bin Article | `src/cases/recyclebin-testcase/tc9763-recycle-bin-article.js` |
| 28 | TC9757 - Add New User with group | `src/cases/security-testcases/tc9757-add-new-user-with-group.js` |
| 29 | TC9765 - Add Folder | `src/cases/folder-testcases/tc9765-add-folder.js` |
| 30 | TC9766 - Add_Folder_Via_QuickLink | `src/cases/globalsitesettings-testcases/tc9766-add-folder-via-quicklink.js` |
| 31 | TC9767 - Edit Folder And Publish | `src/cases/folder-testcases/tc9767-edit-folder-and-publish.js` |
| 32 | TC9768 - Add Acknowledgement | `src/cases/latest-testcases/tc9768-add-acknowledgement.js` |
| 33 | TC9769 - Create_Form_with_Workflow | `src/cases/latest-testcases/tc9769-create-form-with-workflow.js` |
| 34 | TC9770 - Approve_Form_Workflow | `src/cases/latest-testcases/tc9770-approve-form-workflow.js` |
| 35 | TC9777 - Create Event | `src/cases/latest-testcases/tc9777-create-event.js` |
| 36 | TC9771 - FormWithCalculator | `src/cases/latest-testcases/tc9771-formwithcalculator.js` |
| 37 | TC9772 - Reject_Form_Workflow | `src/cases/latest-testcases/tc9772-reject-form-workflow.js` |
| 38 | TC9773 - Form_With_Form_Results | `src/cases/latest-testcases/tc9773-form-with-form-results.js` |
| 39 | TC9774 - Forgot password link and verify | `src/cases/latest-testcases/tc9774-forgot-password-link-and-verify.js` |
| 40 | TC9775 - Enable_QuickAdd_Folder_InGSS | `src/cases/globalsitesettings-testcases/tc9775-enable-quickadd-folder-ingss.js` |
| 41 | TC9764 - Delete Folder | `src/cases/folder-testcases/tc9764-delete-folder.js` |
| 42 | TC9778 - Report generated for the specified date filter | `src/cases/reports-testcases/general/tc9778-report-generated-for-the-specified-date-filter.js` |
