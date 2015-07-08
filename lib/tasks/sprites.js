var sprite = require('css-sprite').stream;
var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {
	config = config.sprites;

	return function() {
		return gulp.src(config.src)
			.pipe(sprite(config.settings))
			.on('error', function(error) {
				handleErrors(error, plugins);
			})
			.pipe(plugins.if('*.png', gulp.dest(config.destSprites)))
			.pipe(plugins.if('*.sass', gulp.dest(config.destSass)))
			.pipe(plugins.if('*.scss', gulp.dest(config.destSass)))
			.pipe(plugins.livereload());
			.pipe(plugins.browserSync.stream());
	}
};