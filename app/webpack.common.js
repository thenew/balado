import path from 'path';

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {

        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // entry name substitution
        publicPath: '/' // important
    },

    resolve: {

        alias: {
            Src: path.resolve(__dirname, './src'),
            Data: path.resolve(__dirname, './src/_data'),
            Languages: path.resolve(__dirname, './src/_languages'),
            Components: path.resolve(__dirname, './src/components'),
            Views: path.resolve(__dirname, './src/views'),
            Utils: path.resolve(__dirname, './src/utils'),
            Styles: path.resolve(__dirname, './src/assets/styles'),
            SvgIcons: path.resolve(__dirname, './src/assets/svg'),
        },

        // enable importing JS files without specifying their's extenstion
        // so we can write: import MyComponent from './my-component';
        extensions: ['.js', '.jsx', '.json', '.styl'],
    },

    // stats: 'minimal'
}