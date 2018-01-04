/**
 * Webpack
 * Translated strings export to src/languages/export
 */

// Node's native package
import path from 'path';

// cleans export directory
import WebpackCleanPlugin from 'webpack-clean'

// recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience.
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

// i18n
import ReactIntlPlugin from 'react-intl-webpack-plugin'

module.exports = {
    output: {
        path: path.resolve(__dirname, 'src/languages/export'),
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
            'src/languages/export/main.js',
        ]),
        new FriendlyErrorsWebpackPlugin(),
        new ReactIntlPlugin(),
    ]
}