const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: {
	polyfill: "./polyfill",
	main: "./main",
    },
    mode: 'development',
    resolve: {
        extensions: [".js", ".ts"]
    },
    devtool: "inline-source-map",
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 1234
    },
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },{
            test: /\.(scss|saas)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
	    }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ]
};
