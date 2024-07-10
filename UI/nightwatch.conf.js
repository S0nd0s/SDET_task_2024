module.exports = {
  src_folders: ['./tests'],

  page_objects_path: 'page-objects',

  custom_commands_path: [],

  custom_assertions_path: '',

  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'firefox'
      },

      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: []
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: []
      }
    },

    // Add other browser configurations as needed, e.g., 'firefox', 'edge', etc.

    // Configuration for Cucumber-JS
    'cucumber-js': {
      src_folders: ['examples/cucumber-js/features/step_definitions'],

      test_runner: {
        type: 'cucumber',

        options: {
          feature_path: 'node_modules/nightwatch/examples/cucumber-js/*/*.feature'
        }
      }
    },

    // Configuration for BrowserStack
    browserstack: {
      selenium: {
        host: 'hub.browserstack.com',
        port: 443
      },

      desiredCapabilities: {
        'bstack:options': {
          userName: '${BROWSERSTACK_USERNAME}',
          accessKey: '${BROWSERSTACK_ACCESS_KEY}'
        }
      },

      disable_error_log: true,

      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
      }
    },

    // Configuration for SauceLabs
    saucelabs: {
      selenium: {
        host: 'ondemand.saucelabs.com',
        port: 443
      },

      desiredCapabilities: {
        'sauce:options': {
          username: '${SAUCE_USERNAME}',
          accessKey: '${SAUCE_ACCESS_KEY}',
          screenResolution: '1280x1024'
        }
      },

      disable_error_log: false,

      webdriver: {
        start_process: false
      }
    },

    // Configuration for Selenium Server
    selenium_server: {
      selenium: {
        start_process: true,
        port: 4444,
        server_path: '', // Leave empty if @nightwatch/selenium-server is installed
        command: 'standalone', // Selenium 4 only
        cli_args: {}
      },

      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub'
      }

      
    }
  }
};
