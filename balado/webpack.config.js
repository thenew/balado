/**
 * css-loader 
 * style-loader: write the loaded CSS to the style tag.
 * extract-text-webpack-plugin: to extract the loaded CSS to an external file
 */

// Node's native package
const path = require('path');

// Simplifies creation of HTML files to serve your webpack bundles
const HtmlWebpackPlugin = require('html-webpack-plugin');

// ?
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// generates favicons and icons for iOS, Android and desktop browsers
// favicons-webpack-plugin 

// recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience.
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [

            // Babel
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
        ],
    },
    devServer: {
        contentBase: './',

        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,

        // enable HMR
        hot: true,

        // Suppress error shown in console
        quiet: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            filename: 'index.html',
            inject: 'body'
            // inlineSource: '.(sss|css)$',
        }),
        new ExtractTextPlugin("styles.css"),
        new FriendlyErrorsWebpackPlugin(),
    ],
    
    // Enable importing JS files without specifying their's extenstion
    // So we can write: import MyComponent from './my-component';
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}
