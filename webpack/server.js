const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const base = require('./base.js');

const serverConfig = base({
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader'],
    },
  ],
  config: {
    entry: {
      server: './src/server/index.js',
    },
    target: 'node',
    plugins: [
      new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
    ],
    externals: [nodeExternals()],
  },
});

module.exports = serverConfig;
