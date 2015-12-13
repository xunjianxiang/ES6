// 这里如果引入gulp-webpack的话将会报错 Cannot read property 'UglifyJsPlugin' of undefined
// 所以在package.json中的devDependencies里面添加webpack和gulp-webpack 两个依赖
var webpack = require('webpack');
module.exports = {
	"entry": {
		"app": "./scripts/export.js"
	},
	"output": {
		"filename": "[name].min.js",
		"sourceMap": true,
		"sourceMapFilename": "../sourcemaps/[name].min.js.map"
	},
	"devtool": "source-map",
	"plugins": [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
	module : {
    loaders: [{
      test   : /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
      query: {
        presets: ['es2015']
      }
  	}]
  }

}
