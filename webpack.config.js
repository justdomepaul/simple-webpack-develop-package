var path = require('path');
var webpack = require("webpack");
var node_modules = __dirname + '/node_modules';


var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
});

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractTextObjectPlugin = new ExtractTextPlugin('./css/[name].css');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors', './js/vendors.js');

var providePlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    'window.jQuery': 'jquery',
    'root.jQuery': 'jquery'
});
// => 注意到這邊的參數會轉換成檔名輸出所以請記得加副檔名

var config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    entry: {
        vendors: ['react', 'react-dom', 'jquery', 'bootstrap'],
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
        noParse: [],
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
        		loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        	},
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
                )
            },
        	{
        		test: /\.eot(\?[\s\S]+)?$/,
        		loader: "file-loader?prefix=font/&name=fonts/[name].[ext]"
        	},
        	{
        		test: /\.(woff|woff2)(\?[\s\S]+)?$/,
        		loader: "url-loader?prefix=font/&limit=5000&name=fonts/[name].[ext]"
        	},
        	{
        		test: /\.ttf(\?[\s\S]+)?$/,
        		loader: "url-loader?prefix=font/limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
        	},
        	{
        		test: /\.svg(\?[\s\S]+)?$/,
        		loader: "url-loader?prefix=font/limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]"
        	},
        	{
        		test: /\.gif/,
        		loader: "url-loader?limit=10000&mimetype=image/gif&name=images/[name].[ext]"
        	},
        	{
        		test: /\.jpg/,
        		loader: "url-loader?limit=10000&mimetype=image/jpg&name=images/[name].[ext]"
        	},
        	{
        		test: /\.png/,
        		loader: "url-loader?limit=10000&mimetype=image/png&name=images/[name].[ext]"
        	},
            {
                test: /\.(png!jpg)$/,
                loader: 'file-loader?name=image/[name].[ext]'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        alias: {},
        extensions: ['', '.js', 'json']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './'
    },
    plugins: [definePlugin, UglifyJsPlugin, ExtractTextObjectPlugin, providePlugin, commonsPlugin],
};

config.addVendor('react', node_modules + '/react/dist/react.min.js');
config.addVendor('react-dom', node_modules + '/react/lib/ReactDOM.js');
config.addVendor('jquery', node_modules + '/jquery/dist/jquery.min.js');
config.addVendor('bootstrap', node_modules + '/bootstrap/dist/js/bootstrap.min.js');
config.addVendor('bootstrap.css', node_modules + '/bootstrap/dist/css/bootstrap.min.css');
config.addVendor('ionicons.css', node_modules + '/ionicons/css/ionicons.min.css');


module.exports = config;
