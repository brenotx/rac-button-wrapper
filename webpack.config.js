const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "Button.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "button.mjs",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
