'use strict';

/**
 * @file Configure API of production mode
 * @description You do not need to configure this file because the API address is generated.
 */

process.env.NODE_ENV = 'production';

const ApiSwitchCli = require('api-switch-cli');

ApiSwitchCli({}, (current) => (
  [`SERVICE_URL=${current}`, 'webpack', '--config', 'config/webpack.config.js', '--mode', 'production',
    '--progress', '--hide-modules']
));
