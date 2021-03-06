const webpack = require("webpack");
const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",
  target: "web",
  // Control how source maps are generated
  // devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    // compress: true,
    // hot: true,
    port: 8080,
    // inline: true,
    // hot: true,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",

          { loader: "css-loader" },
          // { loader: "postcss-loader", options: { sourceMap: true } },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // Only update what has changed on hot reload
    // new webpack.HotModuleReplacementPlugin(),
  ],
});
