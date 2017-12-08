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

// const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'client'),
};

module.exports = {
    entry: path.join(paths.SRC, 'index.js'),
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            // {
            //     test: /\.styl$/,
            //     loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
            // }
        ],
        // rules: [
        //     {
        //         test: /\.css$/,
        //         use: [
        //             {
        //                 loader: 'postcss-loader',
        //                 options: {
        //                     plugins: function () {
        //                         return [autoprefixer]
        //                     }
        //                 }
        //             }
        //         ]
        //     }
        // ]
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
        // new ExtractTextPlugin('style.bundle.css')

        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [
        //         autoprefixer(),
        //         ]
        //     }
        // }),
        // new CriticalPlugin({
        //     src: './client/index.html',
        //     inline: true,
        //     minify: true,
        //     dest: './public/index.html'
        // })
    ],
    
    // Enable importing JS files without specifying their's extenstion
    // So we can write: import MyComponent from './my-component';
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}
