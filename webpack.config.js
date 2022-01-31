const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { optimize } = require("webpack");

module.exports = {
   entry: "./dev/src/index.js",
   plugins: [
      new HtmlWebpackPlugin({ template: "./dev/public/index.html" }),
      new MiniCssExtractPlugin(minimize ),
   ],

   devServer: {
      static: {
         directory: path.join(__dirname, "dev/public"),
      },
      compress: true,
      port: 9000,
   },

   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
               },
            },
         },
         {
            test: [/\.css$/],
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
      ],
   },
};
