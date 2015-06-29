module.exports = function(gulp, plugins, config) {
	config = config.php;

	return function() {
		gulp.watch(config.src)
			.on('change', function(file) {
				plugins.util.log(plugins.util.colors.yellow('file changed' + ' (' + file.path + ')'));
				plugins.livereload.changed(file.path);
			});
	}
};