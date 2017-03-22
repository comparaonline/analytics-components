const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const name = 'analytics-components';

const config = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: `${name}.min.js`,
    library: name,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: { cacheDirectory: true }
      }
    ]
  },
  externals: {
    react: 'react'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      screw_ie8: true,
      sourceMap: false
    }),
    new WebpackCleanupPlugin()
  ]
};

module.exports = config;
