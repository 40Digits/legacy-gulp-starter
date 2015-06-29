module.exports = function(gulp, plugins, config) {
	config = config.production;

	return function() {
    console.log(config);
		return gulp.src(config.cssSrc)
			.pipe(plugins.combineMq())
			.pipe(plugins.minifyCss({advanced:false}))
			.pipe(gulp.dest(config.cssDest))
			.pipe(plugins.filesize());
	}
};