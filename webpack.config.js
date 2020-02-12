const path = require("path");

module.exports = {
  entry: "./dist/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};
