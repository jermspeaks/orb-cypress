const { defineConfig } = require("cypress");

// load the environment variables from the local .env file
const dotenv = require("dotenv")
const env = dotenv.config();

module.exports = defineConfig({
  env: env.parsed,
  defaultCommandTimeout: 100000,
  e2e: {
    setupNodeEvents(on, config) {
      // we can grab some process environment variables
      // and stick it into config.env before returning the updated config
      config.env = config.env || {};
      console.log('config.env', config.env)

      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
