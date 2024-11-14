const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist", // Cambiado de `contentBase` a `static`
    open: true,
    hot: true,
  },
});
