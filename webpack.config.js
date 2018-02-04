const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntry(globPath) {
  const files = glob.sync(globPath);
  let entry = {};

  files.forEach((filePath) => {
    const split = filePath.split('/');
    const name = split[split.length - 2];

    entry[name] = `./${filePath}`;
  });
  return entry;
}
const entry = getEntry('src/**/index.js');

const HtmlWebpackPlugins = Object.keys(entry).map((name) => {
  return new HtmlWebpackPlugin({
    filename: `${name}/index.html`,
    template: `./src/${name}/index.html`,
    inject: true,
    chunks: [name],
    // minify: { //压缩HTML文件
    //   removeComments: true, //移除HTML中的注释
    //   collapseWhitespace: false //删除空白符与换行符
    // },
    // hash: true, //为静态资源生成hash值
    // favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
  })
});
const ExtractTextPlugins = Object.keys(entry).map((name) => {
  return new ExtractTextPlugin({
    filename: `${name}/index.[chunkhash:7].css`
  })
});

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/index.[chunkhash:7].js'
  },
  resolve: {
    alias: {
      'util': path.join(__dirname, 'util'),
      'src': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.css$/,
      use: 'css-loader'
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap:true,
            importLoaders: 1
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10,
        name: '[path][name].[hash:7].[ext]',
        outputPath: (path) => path.split('/').slice(1).join('/'),
        publicPath: (path) => path.split('/').slice(1).join('/')
      }
    }]
  },
  plugins: [
    ...HtmlWebpackPlugins,
    ...ExtractTextPlugins,
    new CleanWebpackPlugin(['dist']),
    // new webpack.DefinePlugin({
    //   'process.env': 'prod'
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      // sourceMap: true
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map'
};