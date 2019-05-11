const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  entry: [
    path.resolve("src/scss/_alignment.scss"),
    path.resolve("src/scss/_colors.scss"),
    path.resolve("src/scss/_decoration.scss"),
    path.resolve("src/scss/_display.scss"),
    path.resolve("src/scss/_float.scss"),
    path.resolve("src/scss/_font-size.scss"),
    path.resolve("src/scss/_list.scss"),
    path.resolve("src/scss/_margin.scss"),
    path.resolve("src/scss/_style.scss"),
    path.resolve("src/scss/_transform.scss")
  ],
  output: {
    filename: "style.js",
    path: path.resolve(__dirname, "dist"),
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
}
