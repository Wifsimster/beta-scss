const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: [path.join(__dirname, "packages/global.scss")],
  output: {
    filename: "style.js",
    path: path.join(__dirname, "dist"),
    publicPath: "dist/",
    pathinfo: false
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
