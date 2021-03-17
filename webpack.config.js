const path = require("path");

module.exports = {
  entry: {
    main: ["./src/slider.js", "./src/index.js"],
    test: "./src/test.js",
  },
  output: {
    // filename: "main.js",
    // filename: "main.[hash].js",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
  },
};
