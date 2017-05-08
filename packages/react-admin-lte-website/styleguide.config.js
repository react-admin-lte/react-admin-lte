const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  components: '../!(react-admin-lte-website)/**/*.jsx',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');
    return `import { ${name} } from 'reactjs-admin-lte';`;
  },
  ignore: [
    '**/*.test.jsx',
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
        'rsg-components/Wrapper':
          path.join(__dirname, 'src/Wrapper'),
      },
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      }, {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.jpg$|\.png$/,
        use: 'file-loader',
      }],
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ],
  },
};
