/**
 * Webpack
 * Translated strings export to src/_languages
 * 
 * use the reactIntlMessages.json file as source file in memsource
 */

// Node's native package
import path from 'path';

// cleans export directory
import WebpackCleanPlugin from 'webpack-clean'

// recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience.
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

// i18n
// combine files, extracted by babel-plugin-react-intl, into one message file called `reactIntlMessages.json` and put this file into the webpack output path.
import ReactIntlPlugin from 'react-intl-webpack-plugin'

module.exports = {
    output: {
        path: path.resolve(__dirname, 'src/_languages'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    
                    // i18n ReactIntlPlugin combine messages files
                    "cacheDirectory": true,
                    "metadataSubscribers":[ReactIntlPlugin.metadataContextFunctionName],

                    plugins: [
                        'transform-react-jsx',
                        ['react-intl'] // extract translated strings
                    ]
                }
            },
            {
                test: /\.(svg|css|styl|ttf|woff|woff2)/,
                use: 'null-loader'
            },
        ],
    },
    plugins: [
        new WebpackCleanPlugin([
            'src/_languages/main.js',
        ]),
        new FriendlyErrorsWebpackPlugin(),
        new ReactIntlPlugin(),
    ]
}