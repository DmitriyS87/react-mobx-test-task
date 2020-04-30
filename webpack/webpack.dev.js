/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smartStrategy({
  entry: 'replace',
  plugins: 'append'
})(common, {
  mode: 'production',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }
});
