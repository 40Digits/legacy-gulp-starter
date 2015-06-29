var path = require('path');

module.exports = function(gulp, plugins, config) {
	config = config.static;

	return function() {
		gulp.src(path.join(config.src, '*.tpl.html'))
			.pipe(plugins.fileInclude())
			.pipe(plugins.rename({ extname: "" }))
			.pipe(plugins.rename({ extname: config.extension }))
			.pipe(gulp.dest(config.dest))
			.pipe(plugins.livereload());
	}
};