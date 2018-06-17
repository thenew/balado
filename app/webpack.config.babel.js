/**
* Webpack
*
* Entry
* Output
* Loaders: in module: { rules: [] }
*          'test': Identify which file or files should be transformed
*          'use': Transform those files so that they can be added to your dependency graph and eventually your bundle
*/

// Node's native package
import path from 'path';

const context = path.resolve(__dirname, 'src')

// Extract text from a bundle, or bundles, into a separate file. Use for css
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Simplifies creation of HTML files to serve your webpack bundles
import HtmlWebpackPlugin from 'html-webpack-plugin'

// cleans output
import WebpackCleanupPlugin from 'webpack-cleanup-plugin'

// generates favicons and icons for iOS, Android and desktop browsers
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

// recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience.
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

import PreloadWebpackPlugin from 'preload-webpack-plugin'

import poststylus from 'poststylus'

// i18n
import ReactIntlPlugin from 'react-intl-webpack-plugin'

// set environment, coming from package.json scripts
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = (NODE_ENV == 'development')

// get common
import common from './webpack.common';

let config = {
  ...common,

  module: {
    loaders: [

      // Stylus general without css modules
      {
        test: /\.styl$/,
        include: path.resolve(__dirname, 'src/assets/styles/app.styl'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: !IS_DEV
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              use: [poststylus([ 'autoprefixer', 'postcss-custom-properties' ])],
            },
          },
        ]
      },

      // Stylus of components/views with css modules
      {
        test: /\.styl$/,
        include: path.resolve(__dirname, 'src/'),
        exclude: path.resolve(__dirname, 'src/assets/styles/'),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !IS_DEV,
                sourceMap: IS_DEV,
                modules: true,
                camelCase: 'dashes',
                localIdentName: '[path][name]__[local]'
              }
            },
            {
              loader: 'stylus-loader',
              options: {
                use: [poststylus([
                  'autoprefixer',
                  'postcss-custom-properties' // css variables
                ])],
              },
            },
          ]
        })
      },

      // {
      //     test: /\.css$/,
      //     include: path.resolve(__dirname, 'src'),
      //     use: [
      //         'style-loader',
      //         'css-loader',
      //     ]
      // },

      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [

          // linter
          {
            loader: 'eslint-loader',
            options: {
              eslintPath: 'eslint'
            }
          }
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {

          // i18n ReactIntlPlugin combine messages files
          "cacheDirectory": true,
          "metadataSubscribers":[ReactIntlPlugin.metadataContextFunctionName],

          plugins: [
            'transform-react-jsx',
            ['react-css-modules', { context }],

            // extract translated strings
            ['react-intl', {
              'messagesDir': path.resolve(__dirname, 'src/languages'),
              // 'enforceDescriptions': false
            }]
          ]
        }
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader'
        ]
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        include: path.resolve('./src/assets/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },

  plugins: [
    // cleans output directory
    // new WebpackCleanupPlugin(),
    new ExtractTextPlugin({
			filename: (IS_DEV) ? 'app.css' : 'app.[hash].css',
			allChunks: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      // filename: 'index.html',
      // inject: 'body'
      // inlineSource: '.(sss|css)$',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'script',
      include: 'asyncChunks'
    }),
    new FriendlyErrorsWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/assets/icons/app-icon.png'), // source image
      inject: !IS_DEV, // Inject the html into the html-webpack-plugin
      background: '#fff', // favicon background color
      title: 'Balado', // app title

      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true, // Android homescreen icon
        appleIcon: true, // Apple touch icons
        appleStartup: true, // Apple startup images
        coast: false, // Opera Coast
        favicons: true, // regular favicons
        firefox: false, // Firefox OS icons
        opengraph: false, // ?
        twitter: false, // ?
        yandex: false, // Yandex browser icon
        windows: false // Windows 8 tile icons
      }
    }),
    new ReactIntlPlugin(),
  ],

  devServer: {
    // static file location
    contentBase: path.join(__dirname, 'dist'),

    publicPath: '',

    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,

    // enable HotModuleReplacementPlugin
    hot: true,

    // suppress error shown in console
    quiet: false,

    // open page
    open: true,
  },
}

// Export languages script
import langExportConfig from './webpack.lang-export';
if(NODE_ENV == 'languages') {
  config = {...common, ...langExportConfig}
}

module.exports = config;