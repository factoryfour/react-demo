const path = require('path');

module.exports = {
	entry: './app/Main.jsx',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, 'app'), path.resolve(__dirname, 'node_modules/@factoryfour/react-authentication')],
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
