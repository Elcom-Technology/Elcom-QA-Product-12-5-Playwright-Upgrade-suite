// @ts-check
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Two projects with the same 43 test cases - run one of them, not both:
  //   suite     - suites/upgrade-suite.spec.js, all 43 in one file   (npm run suite)
  //   testcases - tests/01-... to 43-..., one file per test case     (npm run testcases)
  // A plain "npx playwright test" runs both projects, so every test would run twice.
  projects: [
    { name: 'suite', testDir: './suites' },
    { name: 'testcases', testDir: './tests' },
  ],
  globalSetup: require.resolve('./global-setup'),
  // Katalon ran the suite one test at a time, in order, and later tests use data
  // created by earlier ones - keep it that way.
  workers: 1,
  fullyParallel: false,
  retries: 0,
  timeout: 10 * 60 * 1000, // per test (some upgrade tests are long)
  expect: { timeout: 10 * 1000 },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    ...devices['Desktop Chrome'],
    viewport: { width: 1920, height: 1080 }, // replaces WebUI.maximizeWindow()
    actionTimeout: 60 * 1000,
    navigationTimeout: 60 * 1000,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});
