// Upgrade Suite test 43. TC9778 - Report generated for the specified date filter
// Runs only Reports_TestCases/General/TC9778 - Report generated for the specified date filter.
// It logs in, opens the Report Dashboard, picks the "Articles" report, sets the date filter
// (valid from 9 days ago) and clicks View on Screen, then checks the report has a first row.
// Katalon test case: Reports_TestCases/General/TC9778 - Report generated for the specified date filter
// Run only this test: npx playwright test 43-tc9778-report-generated-for-the-specified-date-filter.spec.js --headed
// Some tests use values saved by an earlier test - run the earlier one first, or run the whole
// suite in order with: npm run suite
const { test } = require('@playwright/test');
const { WebUI } = require('../src/webui');
const { callTestCase } = require('../src/cases');

test('TC9778 - Report generated for the specified date filter', async ({ page }) => {
  await callTestCase(new WebUI(page), 'Reports_TestCases/General/TC9778 - Report generated for the specified date filter');
});
