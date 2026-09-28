// @ts-check
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
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
