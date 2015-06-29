var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {
	config = config.php;

	return function() {
		gulp.watch(config.src)
			.on('error', function(error) {
				handleErrors(error, plugins);
			})
			.on('change', function(file) {
				plugins.util.log(plugins.util.colors.yellow('file changed' + ' (' + file.path + ')'));
				plugins.livereload.changed(file.path);
			});
	}
};