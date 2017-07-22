const path = require("path");
const outputPath = path.resolve(__dirname, "build");

module.exports = {
	devtool: "#source-map",
	entry: './src/components/index.js',
	output: {
		filename: 'bundle.js',
		path: outputPath

	}, 
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				include: path.join(__dirname, 'src'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: false,
							presets: [
								['es2015', { modules: false }],
								'react',
							],
						}
					}
				]
			},
			{
					test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property
					loader:"file-loader",
					exclude: /node_modules/,
					query:{
						name:'[name].[ext]',
						outputPath:'images/'
					}
				},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: false,
							sourceMap:true,
							minimize:false
						}
					}
				]
			},
			{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule
					loader: "url-loader",
					exclude: /node_modules/,
					query:{
						limit:'10000',
						name:'[name].[ext]',
						outputPath:'fonts/'
						//the fonts will be emmited to public/assets/fonts/ folder
						//the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
					}
				}

			// {
			// 	test: /\.(js|jsx)$/,
			// 	use: 'babel-loader?presets[]=es2015',
			// 	exclude: /(node_modules|bower_components)/,
			// }

		]
		// loaders: [
		// 	{
		// 		test: /\.jsx?$/,
		// 		loader: "babel-loader",
		// 		exclude: /node_modules/,
		// 		query:
		// 		{
		// 		    presets: ['es2015', 'react']
		// 	    }
         //    },
		// 	{
		// 		test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property
		// 		loader:"file-loader",
		// 		exclude: /node_modules/,
		// 		query:{
		// 			name:'[name].[ext]',
		// 			outputPath:'images/'
		// 		}
		// 	},
		// 	{
		// 		test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule
		// 		loader: "url-loader",
		// 		exclude: /node_modules/,
		// 		query:{
		// 			limit:'10000',
		// 			name:'[name].[ext]',
		// 			outputPath:'fonts/'
		// 			//the fonts will be emmited to public/assets/fonts/ folder
		// 			//the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
		// 		}
		// 	}
		// 	// {
		// 	// 	test: /\.css$/,
		// 	// 	loader: "css-loader",
		// 	// 	// loaders: ["style-loader","css-loader"],
		// 	// 	options:{sourceMap:true,minimize:true},
		// 	// 	exclude: /node_modules/,
		// 	// }
		// ]
	}
}