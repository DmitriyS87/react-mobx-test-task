/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smartStrategy({
  entry: 'replace',
  plugins: 'append'
})(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: false,
    host: '127.0.0.1',
    port: 8080,
    historyApiFallback: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
});
