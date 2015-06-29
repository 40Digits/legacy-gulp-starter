module.exports = function(gulp, plugins, config) {
	config = config.images;

	return function() {
		gulp.src(config.src)
			.pipe(plugins.changed(config.dest))
			.pipe(plugins.imagemin())
			.pipe(gulp.dest(config.dest))
			.pipe(plugins.livereload());
	}
};
