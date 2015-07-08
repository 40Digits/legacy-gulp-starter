var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {
	config = config.images;

	return function() {
		gulp.src(config.src)
			.on('error', function(error) {
				handleErrors(error, plugins);
			})
			.pipe(plugins.changed(config.dest))
			.pipe(plugins.imagemin())
			.pipe(gulp.dest(config.dest))
			.pipe(plugins.livereload());
			.pipe(plugins.browserSync.stream());
	}
};
