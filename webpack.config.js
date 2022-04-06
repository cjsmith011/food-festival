const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = {
    entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/schedule.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
    },

  //this will connect to the file-loader to optimize the images
    module: {
      rules: [
        {
          test: /\.jpg$/i,
          use: [
            {
              loader: 'file-loader',
              //this will name the images as we expect vs just a random string of numbers and letters
              //always have this before the webpack loader on line 39
              options: {
                esModule: false,
                name (file) {
                  return "[page][name].[ext]"
                },
                publicPath: function(url) {
                  return url.replace("../", "/assets/")
                }
              }
            },
            //this will reduce the size of the images
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
      ]
    },
    //plugins will tell webpack to use the jquery package we installed
    plugins:[
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: "static", //the report outputs to an HTML file in the dist folder
        })
      ],
    mode: 'development'
};