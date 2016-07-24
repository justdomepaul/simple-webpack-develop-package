var path = require('path');
var webpack = require("webpack");

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common', 'common.js');

var providePlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    'window.jQuery': 'jquery',
    'root.jQuery': 'jquery'
});
// => 注意到這邊的參數會轉換成檔名輸出所以請記得加副檔名

module.exports = {
    entry: {
        // common: ['react', 'jquery'],
        common: ['react'],
        comment: './src/app/comment/app.js',
        // commentie: ['babel-polyfill', './src/app/comment/app.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/[name]/app.js'
        // [name] 會依據上面 entry 的屬性名稱變動
    },
    eslint: {
        configFile: './.eslintrc.json',
        failOnWarning: false,
        failOnError: true
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-1', 'react']
                }
            },
            {
        		test: /\.css$/,
        		loader: 'style-loader!css-loader'
        	},
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
        	{
        		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        		loader: "file-loader"
        	},
        	{
        		test: /\.(woff|woff2)$/,
        		loader: "url-loader?prefix=font/&limit=5000"
        	},
        	{
        		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        		loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        	},
        	{
        		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        		loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        	},
        	{
        		test: /\.gif/,
        		loader: "url-loader?limit=10000&mimetype=image/gif"
        	},
        	{
        		test: /\.jpg/,
        		loader: "url-loader?limit=10000&mimetype=image/jpg"
        	},
        	{
        		test: /\.png/,
        		loader: "url-loader?limit=10000&mimetype=image/png"
        	},
            {
                test: /\.(png!jpg)$/,
                loader: 'file-loader?name=/img/[name].[ext]'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', 'json']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './'
    },
    // plugins: [definePlugin, UglifyJsPlugin, providePlugin, commonsPlugin],
    // plugins: [definePlugin, UglifyJsPlugin, providePlugin],
    plugins: [definePlugin, UglifyJsPlugin],
};
