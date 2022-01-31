const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
  },
});
