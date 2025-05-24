import { defineConfig, devices } from '@playwright/test';

process.env.BASEURL ='https://www.americanexpress.com/fr-fr/?inav=NavLogo';
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 1000000,
  use: {

    trace: 'on-first-retry',
    actionTimeout: 60000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],

});
