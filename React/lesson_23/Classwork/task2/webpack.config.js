const path = require("path");
const outputPath = path.resolve(__dirname, "build");

module.exports = {
	entry: './src/main.js', 
	output: {
		filename: 'bundle.js',
		path: outputPath

	}, 
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				query:
				{
				    presets: ['es2015', 'react']
			    }
            }
		]
	}
}