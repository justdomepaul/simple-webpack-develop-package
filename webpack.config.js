var path = require('path')

module.exports = {
    entry: {
        itpdbtableapp: './src/itp-db-table/app.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/dist/',
        filename: 'js/[name].js'
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
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
