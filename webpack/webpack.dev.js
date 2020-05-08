/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: true,
    host: '127.0.0.1',
    port: 8080,
    historyApiFallback: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});
