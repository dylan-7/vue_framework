'use strict';

/**
 * @file Configure local development API
 * @description development
 */

process.env.NODE_ENV = 'development';

const ApiSwitchCli = require('api-switch-cli');

// You can add url at here
const url = {
  dev: 'https://api.dev.demo.com',
  sit: 'https://api.sit.demo.com',
  mock: 'http://localhost:3333'
};

ApiSwitchCli(url, (current) => (
  [`SERVICE_URL=${current}`, 'webpack-dev-server', '--config', 'config/webpack.config.js', '--mode',
    'development', '--progress']
));
