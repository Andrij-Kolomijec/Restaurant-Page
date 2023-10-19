const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    menu: './src/menu.js',
    contacts: './src/contacts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // title: 'Restaurant Page',
      // filename: 'index.html',
      // inject: 'head',
      // scriptLoading: 'defer',
    }),
  ],
  output: {
    filename: '[name].bundle.js', //changed from 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};