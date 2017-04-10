const path = require('path');

module.exports = {
  components: '../**/*.jsx',
  ignore: [
    '**/*.test.jsx',
    '**/*.stories.jsx',
  ],
  require: [
    'babel-polyfill',
    'bootstrap/dist/css/bootstrap.css',
    'font-awesome/css/font-awesome.css',
    'admin-lte/dist/css/AdminLTE.css',
    'admin-lte/dist/css/skins/skin-blue.css',
  ],
  webpackConfig: {
    resolve: {
      alias: {
        'rsg-components/StyleGuide/StyleGuideRenderer':
          path.join(__dirname, 'src/StyleGuideRenderer'),
        'rsg-components/TableOfContents/TableOfContentsRenderer':
          path.join(__dirname, 'src/TableOfContentsRenderer'),
        'rsg-components/ComponentsList':
          path.join(__dirname, 'src/ComponentsListRenderer'),
      },
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.jpg$|\.png$/,
        loader: 'file-loader',
      }],
    }
  },
};

