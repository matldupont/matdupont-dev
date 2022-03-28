const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const { DefinePlugin } = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
    clean: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
    }),
  ],
});
