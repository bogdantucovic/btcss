var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BabelMinifyPlugin = require("babel-minify-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    homePage: [
      './docs/src/js/plugins/target-replace-class.js', 
      './docs/src/js/plugins/target-toggle.js', 
      './docs/src/js/common.js', 
      './docs/src/js/pages/home.js', 
      './docs/src/css/pages/home.css', 
      './css/btcss.min.css'
    ],
    navPage: [
      './docs/src/js/plugins/target-replace-class.js', 
      './docs/src/js/plugins/target-toggle.js', 
      './docs/src/js/plugins/calc-flow.js', 
      './docs/src/js/common.js', 
      './docs/src/js/pages/nav.js',
      './docs/src/css/pages/nav.css', 
      './css/btcss.min.css'
    ],
    buttonPage: [
      './docs/src/js/plugins/target-replace-class.js', 
      './docs/src/js/plugins/target-toggle.js', 
      './docs/src/js/common.js', 
      './docs/src/js/pages/button.js', 
      './docs/src/css/pages/button.css', 
      './css/btcss.min.css'
    ],
    formPage: [
      './docs/src/js/plugins/target-replace-class.js', 
      './docs/src/js/plugins/target-toggle.js', 
      './docs/src/js/common.js', 
      './docs/src/js/pages/form.js',  
      './docs/src/css/pages/form.css', 
      './css/btcss.min.css'
    ],
    tablePage: [
      './docs/src/js/plugins/target-replace-class.js', 
      './docs/src/js/plugins/target-toggle.js', 
      './docs/src/js/common.js', 
      './docs/src/js/pages/table.js', 
      './docs/src/css/pages/table.css', 
      './css/btcss.min.css'
    ],
    columnsPage: [
      './docs/src/js/plugins/target-replace-class.js', 
      './docs/src/js/plugins/target-toggle.js', 
      './docs/src/js/common.js', 
      './docs/src/js/pages/columns.js', 
      './docs/src/css/pages/columns.css', 
      './css/btcss.min.css'
    ]
  } ,
  output: {
    filename: 'dist/js/[name].js',
    path: __dirname + '/docs',
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      { 
        test: /\.css$/,
        exclude: /node_modules/, 
        use: ExtractTextPlugin.extract({
          use:[
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/css/[name].css'),
    new BabelMinifyPlugin(), 
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'docs/src/template/index.html',
      chunks: ['homePage']
    }),
    new HtmlWebpackPlugin({  
      filename: 'button.html',
      template: 'docs/src/template/button.html',
      chunks: ['buttonPage']
    }),
    new HtmlWebpackPlugin({  
      filename: 'form.html',
      template: 'docs/src/template/form.html',
      chunks: ['formPage']
    }),
    new HtmlWebpackPlugin({  
      filename: 'columns.html',
      template: 'docs/src/template/columns.html',
      chunks: ['columnsPage']
    }),
    new HtmlWebpackPlugin({  
      filename: 'table.html',
      template: 'docs/src/template/table.html',
      chunks: ['tablePage']
    }),
    new HtmlWebpackPlugin({  
      filename: 'nav.html',
      template: 'docs/src/template/nav.html',
      chunks: ['navPage']
    })
  ],
  watch: true
};
