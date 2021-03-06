const webpack = require('webpack');
const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const name = 'analytics-components';

const config = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${name}.min.js`,
    library: name,
    libraryTarget: 'commonjs2',
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
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types'
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
