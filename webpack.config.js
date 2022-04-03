const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./assets/js/script.js",
    output: {
        path: path.join(__dirname + "/dist"),
        filename: 'main.bundle.js'
    },
    //plugins will tell webpack to use the jquery package we installed

    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
      ],
    mode: 'development'
};