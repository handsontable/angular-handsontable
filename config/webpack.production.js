var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  resolve: {
      extensions: ['.ts', '.js']
  },

  entry: helpers.root('index.ts'),

  output: {
      path: helpers.root('bundles'),
      publicPath: '/',
      filename: 'index.umd.js',
      libraryTarget: 'umd',
      library: 'angular-handsontable'
  },

  // require those dependencies but don't bundle them
  externals: [/^\@angular\//],

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [
            helpers.root('node_modules/rxjs'),
            helpers.root('node_modules/@angular')
        ],
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
                configFileName: helpers.root('tsconfig.json')
            }
          },
          'angular2-template-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),
  ]
};