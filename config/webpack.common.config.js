const { HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { extendDefaultPlugins } = require('svgo');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CompressionPlugin = require('compression-webpack-plugin');

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
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
    }),
    new CleanWebpackPlugin(),
    new ProvidePlugin({
      React: 'react',
    }),
    new CompressionPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
          name: 'vendor', ///< name of bundle
          chunks: 'all', ///< type of code to put in this bundle
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
