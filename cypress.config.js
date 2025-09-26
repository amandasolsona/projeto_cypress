
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false, // Desabilita para evitar problemas de navegação
    setupNodeEvents(on, config) {
      // Reinicia o navegador entre specs para evitar estado residual
      on('before:browser:launch', (browser = {}, launchOptions) => {
        return launchOptions;
      });
    },
  },
});
