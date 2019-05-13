const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: [
    path.resolve("scss/_alignment.scss"),
    path.resolve("scss/_animation.scss"),
    path.resolve("scss/_bg-colors.scss"),
    path.resolve("scss/_border.scss"),
    path.resolve("scss/_color.scss"),
    path.resolve("scss/_cursor.scss"),
    path.resolve("scss/_decoration.scss"),
    path.resolve("scss/_display.scss"),
    path.resolve("scss/_flex.scss"),
    path.resolve("scss/_float.scss"),
    path.resolve("scss/_font-size.scss"),
    path.resolve("scss/_font-weight.scss"),
    path.resolve("scss/_height.scss"),
    path.resolve("scss/_line-height.scss"),
    path.resolve("scss/_list.scss"),
    path.resolve("scss/_margin.scss"),
    path.resolve("scss/_opacity.scss"),
    path.resolve("scss/_overflow.scss"),
    path.resolve("scss/_padding.scss"),
    path.resolve("scss/_pointer-events.scss"),
    path.resolve("scss/_position.scss"),
    path.resolve("scss/_rounded.scss"),
    path.resolve("scss/_shadow.scss"),
    path.resolve("scss/_style.scss"),
    path.resolve("scss/_transform.scss"),
    path.resolve("scss/_vertical-align.scss"),
    path.resolve("scss/_visible.scss"),
    path.resolve("scss/_white-space.scss"),
    path.resolve("scss/_width.scss"),
    path.resolve("scss/_word-wrap.scss"),
    path.resolve("scss/_z-index.scss")
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
};
