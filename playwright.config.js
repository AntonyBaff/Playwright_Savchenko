// @ts-check
const { defineConfig, devices } = require('@playwright/test');



module.exports = defineConfig({
  
  testDir: './e2e',
  timeout: 20000,
  retries: 2,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'http://google.com',
    headless: false,
    screenshot: 'on',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'qauto',
      use: {
        headless: false,
        baseURL: process.env.BASE_URL || 'https://qauto.forstudy.space/',
        httpCredentials: {
          username: process.env.USER_NAME || 'defaultsUsername',
          password: process.env.NAME_PASSWORD || 'defaultPassword',
        }
      }

    },
    
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'], headless: true},
    // },
  ],
});

