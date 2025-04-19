const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // Add your custom event listeners here (if required)
    },
  },
  env: {
    environment: 'development', // Ensure tests are set up for the development environment
  },
});
