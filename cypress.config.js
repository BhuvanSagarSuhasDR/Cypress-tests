const { defineConfig } = require("cypress");
const { tagify } = require("cypress-tags");

module.exports = defineConfig({
  chromeWebSecurity: false,
  supportCrossOrigin: true,
  pageLoadTimeout: 100000,
  e2e: {
    baseUrl: "https://pricelabs.co/signin",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", tagify(config));
      return config;
    },
  },
  viewportWidth: 1440,
  viewportHeight: 900,

  env: {
    userName: "userName",
    password: "password",
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportPageTitle: "PriceLabs UI and API tests",
    reportDir: "cypress/reports",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    html: true,
    json: false,
  },
});
