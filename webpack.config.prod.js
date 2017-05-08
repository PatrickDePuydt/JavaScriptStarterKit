import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js' // [] = placeholder in this case, use names defined in entry point
    },
    plugins: [
        // Use CommonsChunkPlugin to chunk/bundle split
        // Important! The name value must match the key name declared in the entry object above.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),

        // Generate CSS file
        new ExtractTextPlugin('[name].css'),

        // Elimate duplicate packages
        new webpack.optimize.DedupePlugin(),

        // Minify JS
        new webpack.optimize.UglifyJsPlugin(),

        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            // {   test: /\.css$/, 
            //     loader: ExtractTextPlugin.extract('css?sourceMap')
            // },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?sourceMap')
            }
        ]
    }
}