const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',  // changed from development
  entry: {
    index: './src/index.js',
    // home: './src/home.js',         // if left, each creates file in dist
    // menu: './src/menu.js',
    // contacts: './src/contacts.js',
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
    filename: 'main.js', //changed from '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,         // deletes unused files in dist
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
  // optimization: {              //creates runtime.bundle.js
  //   runtimeChunk: 'single',
  // },
};