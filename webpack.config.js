const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const packageData = require('./package.json');

const config = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: `${packageData.name}.min.js`,
    library: packageData.name,
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
