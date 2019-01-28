/* jshint esversion: 6 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    server: './server/server.ts'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  target: 'node',
  mode: 'none',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, '../dist/prod'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'string-replace-loader',
        options: {
          search: 'dist/local',
          replace: 'dist/prod',
          flags: 'g'
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, '../client'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, '../client'), {}
    ),
    new webpack.NormalModuleReplacementPlugin(
      /..\/dist\/local\/server\/main/,
      '../dist/prod/server/main'
    )
  ]
};