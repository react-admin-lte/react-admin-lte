const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  components: '../!(react-admin-lte-website)/**/Box.tsx',
//  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').parse,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import { ${name} } from 'reactjs-admin-lte';`;
  },
  ignore: [
    '**/*.test.tsx',
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
      extensions: ['.ts', '.tsx']
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: '../react-admin-lte/tsconfig.json'
          }
        }]
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
