var watch = require('../util/watch');
var gulpstart = require('../util/gulpstart');

module.exports = function(gulp, plugins, config) {
	var matchThese = [];

	config.watch.tasks.forEach(function(task) {
		matchThese.push({
			when: config[task].match,
			then: gulpstart(task)
		});
	});

	return function() {
		plugins.livereload({ start: true });
		watch({
			root: config.watch.src,
			match: matchThese
		});
	};
};