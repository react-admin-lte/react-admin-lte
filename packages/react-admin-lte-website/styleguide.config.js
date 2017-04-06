const { createConfig } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const postcss = require('@webpack-blocks/postcss');

module.exports = {
  components: '../**/*.jsx',
  ignore: [
    '**/*.test.jsx',
    '**/*.stories.jsx',
  ],
  webpackConfig: createConfig([
    babel(),
    postcss()
  ])
};
