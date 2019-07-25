const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackLoggingPlugin = require("webpack-logging-plugin");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    inline: true,
    hot: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 40000,
              name: "/[name].[ext]",
              outputPath: "images"
            }
          },
          "image-webpack-loader"
        ]
      },
      {
        test: /\.woff$|\.ttf$/,
        loader: "file-loader",
        options: {
          name: "/[name].[ext]",
          outputPath: "fonts"
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      { test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/assets/favicon.ico",
        to: "./"
      },
      {
        from: "./src/assets/",
        to: "./images/"
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.template.ejs",
      inject: "body"
    }),
    new WebpackLoggingPlugin({
      formatError: err => err,
      formatStats: stats => formatWebpackMessages(stats.toJson({}, true)),
      successCallback: () =>
        console.log("App is running at: http://localhost:8080/")
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
