var path = require("path");
var webpack = require("webpack");
var node_modules = path.resolve(__dirname, "node_modules");

var definePlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "true")),
	__PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || "false")),
	"process.env":{
		"NODE_ENV": JSON.stringify("production")
	}
});

var UglifyJSP = require('uglifyjs-webpack-plugin');
var UglifyJsPlugin = new UglifyJSP({
	compress: { warnings: false }
});

// only webpack2
//var LoaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
//    minimize: true,
//	debug: false,
//	options: {
//		context: __dirname
//	}
//});

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractTextObjectPlugin = new ExtractTextPlugin("./dist/css/[name].css");

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' });

var providePlugin = new webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery",
	"window.jQuery": "jquery",
	"root.jQuery": "jquery"
});

var config = {
	entry: {
		vendors: ["jquery"],
		app: "./src/app/app.js"
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/dist/",
		// server的導入路徑
		filename: "js/[name]/app.js"
		// [name] 會依據上面 entry 的屬性名稱變動
	},
	module: {
		noParse: [
			new RegExp("./jquery/dist/jquery.min.js"),
			new RegExp("./bootstrap/dist/css/bootstrap.min.css"),
			new RegExp("./ionicons/dist/css/ionicons.min.css")
		],
		rules: [
			{
				test: /\.jsx$|\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					cacheDirectory: true,
					presets: ["es2015", "stage-1"]
				}
			},
			//{
			//	test: /(\.css|\.scss)$/,
			//	use: ExtractTextPlugin.extract({
			//		fallback: "style-loader",
			//		use: [
			//			{
			//				loader: "css-loader",
			//				query: {
			//					sourceMap: true,
			//					modules: true
			//				}
			//			},
			//			{
			//				loader: "sass-loader",
			//				query: {
			//					sourceMap: true
			//				}
			//			}
			//		]
			//	})
			//},
			{
				test: /\.css$/,
				use: ExtractTextObjectPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextObjectPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
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
				loader: "file-loader?name=image/[name].[ext]"
			}
		]
	},
	devtool: "source-map",
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			"jquery": path.resolve(node_modules, "./jquery/dist/jquery.min.js"),
			"bootstrap.css": path.resolve(node_modules, "./bootstrap/dist/css/bootstrap.min.css"),
			"ionicons.css": path.resolve(node_modules, "./ionicons/dist/css/ionicons.min.css")
		},
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		contentBase: "./"
	},
	plugins: [definePlugin, UglifyJsPlugin, ExtractTextObjectPlugin, providePlugin, commonsPlugin]
};

//var addVendor = function (name, path) {
//	config.resolve.alias[name] = path;
//	config.module.noParse.push(new RegExp(path));
//};
//addVendor("jquery", path.resolve(node_modules, "./jquery/dist/jquery.min.js"));
//addVendor("bootstrap.css", path.resolve(node_modules, "./bootstrap/dist/css/bootstrap.min.css"));
//addVendor("ionicons.css", path.resolve(node_modules, "./ionicons/css/ionicons.min.css"));

module.exports = config;
