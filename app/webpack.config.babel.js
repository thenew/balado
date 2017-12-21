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

// ?
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


// import svgoLoader from 'svgo-loader'

// set environment, coming from package.json scripts
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // entry name substitution
        publicPath: '/' // important
    },
    
    module: {
        loaders: [
            {
                test: /\.styl$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: (NODE_ENV == 'development') ? true : false,
                            // importLoaders: 1,
                            modules: true,
                            localIdentName: '[path][name]__[local]'
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            use: [poststylus([ 'autoprefixer', 'postcss-custom-properties' ])],
                        },
                    },
                ]
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                   'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: (NODE_ENV == 'development') ? true : false,
                            // importLoaders: 1,
                            modules: true,
                            localIdentName: '[path][name]__[local]'
                        }
                    },
                ]
            }, {
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
            },
            {
                test: /\.svg$/,
                include: path.resolve('./src/assets/svg'),
                use: [
                  'svg-sprite-loader'
                //   'svgo-loader'
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
        // cleans output
        new WebpackCleanupPlugin(),

        new ExtractTextPlugin("app.css", {allChunks: false}),
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
            inject: true, // Inject the html into the html-webpack-plugin
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
        })
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
    },

    resolve: {

        alias: {
            Components: path.resolve(__dirname, './src/components'),
            Views: path.resolve(__dirname, './src/Views'),
            Styles: path.resolve(__dirname, './src/assets/styles'),
            SvgIcons: path.resolve(__dirname, './src/assets/svg'),
            I18n: path.resolve(__dirname, './src/i18n'),
            Data: path.resolve(__dirname, './src/data'),
        },

        // enable importing JS files without specifying their's extenstion
        // so we can write: import MyComponent from './my-component';
        extensions: ['.js', '.styl'],
    },

    // stats: 'minimal'
}
