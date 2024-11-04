const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const CURRENT_CHAPTER = 1;
const FOLDER = `chapter${CURRENT_CHAPTER}`;

module.exports = {
  entry: `./${FOLDER}/index.ts`,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", `${FOLDER}`),
  },
  plugins: [new UglifyJSPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { modules: false }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
