const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Limpia la carpeta dist en cada build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource", // Reemplaza file-loader en Webpack 5
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Archivo HTML base
    }),
  ],
};
