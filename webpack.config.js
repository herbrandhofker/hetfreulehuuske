const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
     template: './src/index.html',
     favicon : './src/favicon.png'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images', to: './images' },
        { from: './src/data', to: './data' },
        { from: './src/fonts', to: './fonts' },
      ],
  })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module :{
      rules : [
          {
              test: /\.css$/i,
              use: ['style-loader','css-loader'] 
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },  {
            test: /\.json5$/i,
            type: 'json',
            parser: {
              parse: json5.parse,
            },
          },
         
      ],
  },
};