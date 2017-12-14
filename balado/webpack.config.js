
// Node's native package
const path = require('path');

const context = path.resolve(__dirname, 'src');

// ?
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Simplifies creation of HTML files to serve your webpack bundles
const HtmlWebpackPlugin = require('html-webpack-plugin');

// generates favicons and icons for iOS, Android and desktop browsers
// favicons-webpack-plugin 

// recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience.
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const PreloadWebpackPlugin = require('preload-webpack-plugin');

// set environment, coming from package.json scripts
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    context,
    entry: './index.js',
    
    module: {
        loaders: [
            {
            //     test: /\.css$/,
            //     loader: 'style-loader'
            // }, {
                test: /\.css$/,
                include: path.resolve(__dirname, './src'),
                loaders: [
                   'style-loader',
                //    'css-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: (NODE_ENV == 'development') ? true : false,
                            // importLoaders: 1,
                            modules: true,
                            localIdentName: '[path][name]__[local]'
                        }
                    },
                    'stylus-loader'
                    // 'postcss-loader'
                ]
            },

            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    plugins: [
                        'transform-react-jsx',
                        [
                            'react-css-modules', { context }
                        ]
                    ]
                }
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin("app.css", {allChunks: false}),
        new HtmlWebpackPlugin({
            template: 'index.html',
            // filename: 'index.html',
            // inject: 'body'
            // inlineSource: '.(sss|css)$',
        }),
        new FriendlyErrorsWebpackPlugin(),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script',
            include: 'asyncChunks'
        }),
    ],
    
    devServer: {
        contentBase: './dist',

        publicPath: '',

        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,

        // enable HMR
        hot: true,

        // Suppress error shown in console
        quiet: false,
    },

    // Enable importing JS files without specifying their's extenstion
    // So we can write: import MyComponent from './my-component';
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    stats: 'minimal'
}
