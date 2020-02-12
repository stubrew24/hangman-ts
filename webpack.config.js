const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./dist/index.js",
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true
      })
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};
