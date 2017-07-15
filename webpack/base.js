const path = require('path');
const src = path.resolve(__dirname, '../src');
const prependSrc = pathStr => `${src}/${pathStr}`;

const base = extend => {
  const rules = [
    {
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    },
  ];

  if (extend.rules) {
    rules.push(...extend.rules);
  }

  return Object.assign({}, {
    context: path.resolve(__dirname, '../'),
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].js',
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
      modules: [src, 'node_modules'],
      alias: {
        Components: prependSrc('client/components'),
        Actions: prependSrc('client/actions'),
        Containers: prependSrc('client/containers'),
        Reducers: prependSrc('client/reducers'),
        Utils: prependSrc('client/utils'),
        Constants: prependSrc('client/constants.js'),
        Store: prependSrc('client/store.js'),
        Sagas: prependSrc('client/sagas/index.js'),
      },
    },
    module: {
      rules,
    },
  }, extend.config);
};

module.exports = base;
