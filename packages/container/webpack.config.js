const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 5000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:5001/remoteEntry.js",
        cart: "cart@http://localhost:5002/remoteEntry.js",
      },
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
