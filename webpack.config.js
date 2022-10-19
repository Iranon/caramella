const path = require('path');
const ShebangPlugin = require('webpack-shebang-plugin');
const IgnorePlugin = require('webpack').IgnorePlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'caramella.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  stats: {
    errorDetails: false,
    children: false
 },
  plugins: [
    new ShebangPlugin(),
    new IgnorePlugin({
      resourceRegExp: /original-fs/,  //not found in adm-zip (apparently only needed for Electron)
      contextRegExp: /adm-zip/
    })
  ],
};
