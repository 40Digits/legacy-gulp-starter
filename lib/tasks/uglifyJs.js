module.exports = function(gulp, plugins, config) {
	config = config.production;

	return function() {
		return gulp.src(config.jsSrc)
			.pipe(plugins.uglify())
			.pipe(gulp.dest(config.jsDest))
			.pipe(plugins.filesize());
	}
};
