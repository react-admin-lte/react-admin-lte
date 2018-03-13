const ENV = process.env.BABEL_ENV;

if (ENV === 'es') {
  config = {};
} else {
  config = {
    presets: [
      [
        'babel-preset-env',
        {
          targets: {
            ie: 9,
            edge: 14,
            firefox: 45,
            chrome: 49,
            safari: 10,
            node: '6.11'
          },
          modules: ENV === 'modules' ? false : 'commonjs'
        }
      ]
    ]
  }
}

module.exports = config;
