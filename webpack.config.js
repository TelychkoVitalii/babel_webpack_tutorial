const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',

  // With 1 entry point
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    // path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html'
    })
  ]
  // entry: {
  //   pageOne: './src/pageOne/index.js',
  //   pageTwo: './src/pageTwo/index.js',
  //   pageThree: './src/pageThree/index.js'
  // },
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist')
  // }
};