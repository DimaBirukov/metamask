const { defineConfig } = require('cypress');

module.exports = defineConfig({
    userAgent: 'synpress',
    retries: {
        runMode: process.env.CI ? 1 : 0,
        openMode: 0,
    },
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    chromeWebSecurity: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    defaultCommandTimeout: process.env.SYNDEBUG ? 9999999 : 30000,
    pageLoadTimeout: process.env.SYNDEBUG ? 9999999 : 30000,
    requestTimeout: process.env.SYNDEBUG ? 9999999 : 30000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Cypress Inline Reporter',
        embeddedScreenshots: true,
        autoOpen: true,
        inlineAssets: false, //Adds the asserts inline
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
