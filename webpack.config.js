var path = require('path')

module.exports = {
    entry: {
        comment: './src/app/comment/app.jsx',
        // dbtableapp: './src/app/dbtable/app.jsx'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/dist/',
        filename: 'js/[name]/[name].js'
        // [name] 會依據上面 entry 的屬性名稱變動
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'jshint-loader'
        //     }
        // ],
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
