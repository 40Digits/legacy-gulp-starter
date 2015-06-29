var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {
	config = config.production;

	return function() {
		return gulp.src(config.jsSrc)
			.pipe(plugins.uglify())
			.on('error', function(error) {
				handleErrors(error, plugins);
			})
			.pipe(gulp.dest(config.jsDest))
			.pipe(plugins.filesize());
	}
};
