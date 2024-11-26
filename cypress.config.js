const { defineConfig } = require('cypress');

const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const bundler = createBundler();
      on('file:preprocessor', bundler);
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
