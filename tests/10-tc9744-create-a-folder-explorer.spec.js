// Upgrade Suite test 10. TC9744 - Create a Folder Explorer
// It logs in, creates an article in Elcom_Automation_Folder, adds a Folder Explorer element
// pointing at Elcom_Sub_Folder (articles and documents, all folder and content actions on),
// and checks "Folder Explorer" shows.
// Katalon test case: Article Testcases/TC9744 - Create a Folder Explorer
// Run only this test: npx playwright test 10-tc9744-create-a-folder-explorer.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9744 - Create a Folder Explorer', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Article Testcases/TC9744 - Create a Folder Explorer');
});
