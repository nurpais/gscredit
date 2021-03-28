const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: {
    app: paths.src + "/index.js",
  },
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
    pathinfo: false,
  },

  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      template: paths.src + "/index.html",
      filename: "index.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/personal-loan.html",
      filename: "personal-loan.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/foreigner-loan.html",
      filename: "foreigner-loan.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/debt-loan.html",
      filename: "debt-loan.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/wedding-loan.html",
      filename: "wedding-loan.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/business-loan.html",
      filename: "business-loan.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/home-loan.html",
      filename: "home-loan.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/medical-loan.html",
      filename: "medical-loan.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/blog.html",
      filename: "blog.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/blog-post.html",
      filename: "blog-post.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/about.html",
      filename: "about.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/apply.html",
      filename: "apply.html",
      minify: false,
      scriptLoading: "blocking",
    }),

    new HtmlWebpackPlugin({
      template: paths.src + "/reviews.html",
      filename: "reviews.html",
      minify: false,
      scriptLoading: "blocking",
    }),
  ],
  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(?:svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/svg/[name][ext]",
        },
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
};
