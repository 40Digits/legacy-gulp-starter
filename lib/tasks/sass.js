var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {
	config = config.sass;

	return function () {
		return gulp.src(config.src)
			.pipe(plugins.sourcemaps.init())
			.on('error', handleErrors)
			.pipe(plugins.cssGlobbing(config.globbing))
			.pipe(plugins.sass(config.settings))
			.pipe(plugins.sourcemaps.write())
			.pipe(plugins.autoprefixer(config.autoprefixer))
			.pipe(gulp.dest(config.dest))
			.pipe(plugins.livereload());
	}
};
