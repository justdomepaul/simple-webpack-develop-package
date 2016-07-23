var path = require('path')
var webpack = require("webpack");

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// => 注意到這邊的參數會轉換成檔名輸出所以請記得加副檔名

module.exports = {
    entry: {
        comment: './src/app/comment/app.js',
        // dbtableapp: './src/app/dbtable/app.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/[name]/[name].js'
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
        		loader: "file"
        	},
        	{
        		test: /\.(woff|woff2)$/,
        		loader: "url?prefix=font/&limit=5000"
        	},
        	{
        		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        		loader: "url?limit=10000&mimetype=application/octet-stream"
        	},
        	{
        		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        		loader: "url?limit=10000&mimetype=image/svg+xml"
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
        	}
        ]
    },
    resolve: {
        extensions: ['', '.js', 'json', '.scss', 'css']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './'
    },
    // plugins: [definePlugin, commonsPlugin],
    plugins: [definePlugin],
};
