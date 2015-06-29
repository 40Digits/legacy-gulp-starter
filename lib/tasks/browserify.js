/* browserify task
	 ---------------
	 Bundle javascripty things with browserify!

	 This task is set up to generate multiple separate bundles,
	 from different sources.

	 See browserify.bundleConfigs in lib/config.js
*/

var p = require('path');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');

module.exports = function(gulp, plugins, config) {

	return function(callback) {

		var queue = config.browserify.bundles.length;
		
		var reportFinished = function() {
			bundleLogger.end();
			queue--;
			if (queue === 0) callback();
		};

		// create the bundles
		config.browserify.bundles.forEach(function(bundle) {
			var entries = [],
				b;

			bundle.entries.forEach(function(entry) {
				entries.push(p.resolve(config.browserify.src + entry));
			});

			b = browserify({
				cache: {},
				packageCache: {},
				fullPaths: false,
				entries: entries,
				// Add file extentions to make optional in your requires
				extensions: config.extensions,
				// Enable source maps!
				debug: config.debug
			});

			// Log when bundling starts
			bundleLogger.start(bundle.outputName);

			return b
				.bundle()
				// Report compile errors
				.on('error', handleErrors)
				// Use vinyl-source-stream to make the
				// stream gulp compatible. Specifiy the
				// desired output filename here.
				.pipe(source(bundle.outputName))
				.on('end', reportFinished)
				// Specify the output destination
				.pipe(gulp.dest(config.browserify.dest))
				.pipe(plugins.livereload());
		});
	};
};