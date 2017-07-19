module.exports = {
	entry: './app/Main.jsx',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: /(app|node_modules\/@factoryfour\/react-authentication)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
