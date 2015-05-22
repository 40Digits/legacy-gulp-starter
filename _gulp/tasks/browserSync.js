var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		config = require('../config').browserSync;

gulp.task('browser-sync', function() {
	if (config.useBrowserSync)
		browserSync.init(config.config);
});