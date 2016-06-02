var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'./index.jsx'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
        require('webpack-fail-plugin'),
	],
	ts: {
		compilerOptions: {
			"noEmit": false
		}
	},
	module: {
		loaders: [
            { test: /\.(js|jsx)$/, loader: 'babel', exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react']
              } 
            },
			{ test: /\.tsx?$/, loader: 'ts',
				exclude: [path.resolve(__dirname, 'node_modules')]
			},
//			{ test: /\.css$/, loader: 'style!css' },
//			{ test: /\.scss$/, loader: 'style!css!sass' },
//			{ test: /\.json$/, loader: 'json' },
//			{ test: /\.tsx?$/, loader: 'babel?presets[]=es2015!ts',
//			{ test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader' },
			// http://alexomara.com/blog/webpack-and-jquery-include-only-the-parts-you-need/
//			{ test: /jquery[\\\/]src[\\\/]selector\.js$/, loader: 'amd-define-factory-patcher-loader' }
		]
	},
	resolve: {
		extensions: ['.js', '.tsx', '.ts', '']
	}
};