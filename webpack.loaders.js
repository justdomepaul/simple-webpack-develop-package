module.exports = [
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
];
