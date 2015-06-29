var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {
	config = config.production;

	return function() {
		return gulp.src(config.cssSrc)
			.on('error', function(error) {
				handleErrors(error, plugins);
			})
			.pipe(plugins.combineMq())
			.pipe(plugins.minifyCss({advanced:false}))
			.pipe(gulp.dest(config.cssDest))
			.pipe(plugins.filesize());
	}
};