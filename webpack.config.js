const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry : [path.resolve(__dirname, "src/index.js")],
    output : {
        path : path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    mode    : "development",
    devtool : "eval-source-map",
    plugins : [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        })
    ],
    module: { 
        rules: [
            {
                test: require.resolve("./src/foobar.js"),
                loader: "imports-loader",
                options: {
                    wrapper: "window"
                }
            }
        ]
    }
};
