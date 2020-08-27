const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "js/bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}