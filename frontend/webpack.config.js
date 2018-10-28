const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },
    devtool: 'source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.[j|t]sx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'initial',
        }
    }
};
