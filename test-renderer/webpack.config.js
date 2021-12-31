const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: "./test-renderer/src/index.js",
  resolve: {
    modules: [path.resolve(__dirname, "../"), "node_modules"],

    extensions: [".js", ".jsx"],
  },

  output: {
    filename: "bundle.js",
    path: path.resolve("./test-renderer/dist"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devServer: {
    port: 3000,
    static: {
      directory: path.resolve("./test-renderer/dist"),
    },
    compress: true,
    liveReload: true,
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/$/,
          to: "/index.html",
        },
      ],
    },
  },
};
