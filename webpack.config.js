const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {test: /\.(png|jp(e*)g|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8000,
          name: 'images/[hash]-[name].[ext]'
        }
      }]
      }

    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.jpg',
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin
  ]
};

module.exports = config;