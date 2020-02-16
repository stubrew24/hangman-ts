const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./dist/index.js",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object"),
      "process.env": {
        RAPID_API_KEY: JSON.stringify(
          "895c54ea64msh6c37d0108d1ee19p11a0e7jsn7d9c264f6ff6"
        )
      }
    })
  ],
  node: {
    fs: "empty"
  }
};
