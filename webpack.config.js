module.exports = {
	// entry point of our application
	entry: './main.js',
	// where to put our compiled bundle
	output: {
		path: __dirname,
		filename: 'build.js'
	},
	module: {
	// 'loaders' is an array of loaders to use.
	// here we are only configuring vue-loader
		loaders: [
			{
				// a regex for matching all files that end in '.vue'
				test: /\.vue$/,
				// loader to use for matched files
				loader: 'vue'
			},
      {
        // use babel-loader for *.js files
        test: /\.js$/,
        loader: 'babel',
        // important: exclude files in node_modules
        // otherwise it's going to be really slow!
        exclude: /node_modules/
      }
		]
	},
  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
