const path = require('path');
const { HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        exclude: /node_modules/,
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon/favicon.ico',
    }),
    new CspHtmlWebpackPlugin({
      //https://csp-evaluator.withgoogle.com/
      'script-src': "'unsafe-inline'",
      'worker-src': "'self'",
      // 'require-trusted-types-for': "'script'",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
    new ProvidePlugin({
      React: 'react',
    }),
    new WebpackPwaManifest({
      name: 'MatDupont.dev',
      short_name: 'MatDupont.dev',
      description: "Mat Dupont's personal site and playground",
      orientation: 'portrait',
      display: 'standalone',
      start_url: '.',
      background_color: '#1e150e',
      theme_color: '#1e150e',
      inject: true,
      ios: true,
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/headshot-600w.jpeg'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          ios: true,
        },
        {
          src: path.resolve('src/assets/headshot.png'),
          size: '1024x1024', // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/assets/headshot.png'),
          size: '1024x1024', // you can also use the specifications pattern
          purpose: 'maskable',
        },
      ],
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          //name: 'vendor', ///< name of bundle
          //chunks: 'all', ///< type of code to put in this bundle
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['mozjpeg', { progressive: true, quality: 40 }],
              ['pngquant', { optimizationLevel: 5 }],
              ['svgo', 'preset-default'],
            ],
          },
        },
      }),
      new ESBuildMinifyPlugin(),
    ],
  },
};
