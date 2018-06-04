const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    activity: './data/activity-list.js',
    theme: './data/theme-list.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a index.html
      filename: 'index.html',
      template: './index.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({  // Also generate a activity.html
      filename: 'activity.html',
      template: './activity.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({  // Also generate a theme.html
      filename: 'theme.html',
      template: './theme.html',
      inject: 'head'
    }),
    new CopyWebpackPlugin([{
      from: './js', to: 'js',
    }, {
      from: './img', to: 'img',
    }, {
      from: './style', to: 'style',
    }])
  ]
};