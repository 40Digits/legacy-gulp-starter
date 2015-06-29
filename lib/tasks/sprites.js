var sprite = require('css-sprite').stream

module.exports = function(gulp, plugins, config) {
	config = config.sprites;

	return function() {
		gulp.src(config.src)
			.pipe(sprite(config.settings))
			.pipe(plugins.if('*.png', gulp.dest(config.destSprites)))
			.pipe(plugins.if('*.sass', gulp.dest(config.destSass)))
			.pipe(plugins.if('*.scss', gulp.dest(config.destSass)))
			.pipe(plugins.livereload());
	}
};