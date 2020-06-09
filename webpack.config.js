const webpack = require('webpack');
const path = require('path');
const config = {
  devtool:'source-map',
  entry: {
    'bundle':'./src/App.ts',
    'client':'./src/client.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
const serverConfig = {
  devtool:'source-map',
  entry: {
    'server':'./src/server.ts'
  },
  target:'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};
module.exports = [config,serverConfig];