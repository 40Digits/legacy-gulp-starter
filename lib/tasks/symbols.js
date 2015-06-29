var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {
	config = config.symbols;

	return function () {
		return gulp.src(config.src)
			.pipe(plugins.iconfont(config.settings))
			.on('codepoints', function(codepoints, options) {
				// Options for when the scss/sass files are being generated.
				var optionsSass = {
					glyphs: codepoints,
					fontName: 'symbols',
					fontPath: 'assets/fonts/symbols/',
					className: 'symbol'
				};
				// Options for when the preview files are being generated.
				var optionsHtml = {
					glyphs: codepoints,
					fontName: 'symbols',
					fontPath: '',
					className: 'symbol'
				};
				// Generate sass/scss file for symbols
				gulp.src(config.tplSass)
					.pipe(plugins.consolidate('lodash', optionsSass))
					.pipe(plugins.rename(config.renameSass))
					.pipe(gulp.dest(config.destSass));
				// Generate HTML file for symbol preview
				gulp.src(config.tplHtml)
					.pipe(plugins.consolidate('lodash', optionsHtml))
					.pipe(plugins.rename({ basename:'symbols' }))
					.pipe(gulp.dest(config.destFont));
				// Generate css file for HTML preview
				gulp.src(config.tplCss)
					.pipe(plugins.consolidate('lodash', optionsHtml))
					.pipe(plugins.rename({ basename:'symbols' }))
					.pipe(gulp.dest(config.destFont));
			})
			.on('error', function(error) {
				handleErrors(error, plugins);
			})
			.pipe(gulp.dest(config.destFont))
			.pipe(plugins.livereload());
	};
};