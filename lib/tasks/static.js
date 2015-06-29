var path = require('path');
var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {
	config = config.static;

	return function() {
		return gulp.src(path.join(config.src, '*.tpl.html'))
			.pipe(plugins.fileInclude())
			.on('error', function(error) {
				handleErrors(error, plugins);
			})
			.pipe(plugins.rename({ extname: "" }))
			.pipe(plugins.rename({ extname: config.extension }))
			.pipe(gulp.dest(config.dest))
			.pipe(plugins.livereload());
	}
};