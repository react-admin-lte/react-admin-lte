const path = require('path');
require('babel-register'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = config => {
  const { env } = process;

  config.set({
    frameworks: ['tap'],
    files: ['test/index.js'],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      node: {
        fs: 'empty',
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
      module: {
        loaders: [{
          test: /\.js/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
          },
        }, {
          test: /\.jsx/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
          },
        }, {
          test: /\.json/,
          loader: 'json',
        }],
      },
      devtool: 'cheap-module-inline-source-map',
      resolve: {
        root: [path.join(__dirname, './src')],
        extensions: ['', '.js', '.jsx'],
      },
      entry: undefined,
    },
    webpackMiddleware: {
      noInfo: true,
    },
    reporters: ['tap-pretty', 'coverage'],
    tapReporter: {
      prettifier: 'tap-spec',
      separator: true,
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage',
    },
    browsers: env.BROWSER ? env.BROWSER.split(',') : ['Chrome'],
    singleRun: env.CONTINUOUS_INTEGRATION === 'true',
  });
};
