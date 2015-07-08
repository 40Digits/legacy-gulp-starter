var merge = require('./util/deepishMerge.js');

// Gulp options/settings for tasks.
module.exports = function(base, options) {
	// Paths
	var appDir = base;
	var assetsDir = appDir + (options.assetsDir || '/assets');
	var sourceDir = appDir + (options.sourceDir || '/_src');

	// Source Directory
	var _source = {
		root:     sourceDir,
		images:   sourceDir + '/images/**/*',
		scripts:  sourceDir + '/js/',
		sprites:  sourceDir + '/sprites/*.png',
		styles:   sourceDir + '/sass/**/*.{sass,scss}',
		symbols:  sourceDir + '/symbols/*.svg',
		tpl:      sourceDir + '/symbols/tpl/',
		static:   sourceDir + '/static/',
		php:      [appDir + '/**/*.php', '!' + appDir + '/node_modules/']
	};

	// Assets Directory
	var _assets = {
		root:     assetsDir,
		images:   assetsDir + '/images/',
		scripts:  assetsDir + '/js/',
		sprites:  assetsDir + '/images/sprites/',
		styles:   assetsDir + '/css/',
		symbols:  assetsDir + '/fonts/symbols/',
		static:   appDir
	};

	var config = {};

	// Default Tasks
	config.default = {
		tasks: ['symbols', 'sprites', 'sass', 'images', 'browserify', 'watch']
	};

	// Browserify
	config.browserify = {
		debug: false,
		src: _source.scripts,
		dest: _assets.scripts,
		match: 'js/**/*.+(js|ejs)',
		bundles: []
	};

	// Sass
	config.sass = {
		src: _source.styles,
		dest: _assets.styles,
		match: 'sass/**/*.+(sass|scss)',
		settings: {
			indentedSyntax: true,
			errLogToConsole: true,
			style: 'nested'
		},
		globbing: {
			extensions: ['.scss', '.sass']
		}
	};

	// Auto Prefixer
	config.autoprefixer = {
		browsers: [
			'last 2 versions',
			'safari 5',
			'ie 8',
			'ie 9',
			'android 4'
		],
		cascade: true
	};

	// Sprites
	config.sprites = {
		src: _source.sprites,
		destSprites: _assets.sprites,
		destSass: _source.root + '/sass/helpers',
		match: 'sprites/**/*.+(png)',
		settings: {
			retina: true,
			style: '_sprites.scss',
			cssPath: _assets.sprites,
			processor: 'scss',
			orientation: 'binary-tree',
			prefix: 'sprite'
		}
	};

	// Symbols
	config.symbols = {
		src: _source.symbols,
		tplCss: _source.tpl + 'symbols.tpl.css',
		tplSass: _source.tpl + 'symbols.tpl.scss',
		tplHtml: _source.tpl + 'symbols.tpl.html',
		destFont: _assets.symbols,
		destSass: _source.root + '/sass/helpers',
		match: 'symbols/*.+(svg)',
		settings: {
			fontName: 'symbols',
			appendCodepoints: false,
			centerHorizontally: true,
			normalize: true,
			fontHeight: false
		},
		renameSass: {
			basename: '_symbols',
			extname: '.scss'
		}
	};

	// Static
	config.static = {
		src: _source.static,
		dest: _assets.static,
		extension: ".html",
		match: 'static/**/*.+(html)',
		settings: {
			prefix: '@@',
	    basepath: '/'
		},
	};

	// Images
	config.images = {
		src: _source.images,
		dest: _assets.images,
		match: 'images/**/*.+(png|jpg|jpeg|svg|gif)',
		settings: {
			progressive: true,
			optimizationLevel: 4
		}
	};


	// Watch
	config.watch = {
		src: _source.root,
		dest: _assets.root,
		tasks: ['browserify', 'sass', 'symbols', 'images', 'sprites'],
	};

	// BrowserSync
	config.browserSync = {
		useBrowserSync: false,
		// See http://www.browsersync.io/docs/options/ for a complete list of configuration options
		config: {
			// proxy: 'yourvhostname.dev',
			server: appDir,
			open: true,
			notify: false,
			reloadOnRestart: true,
			files: ['**/*.css', assetsDir + '**/*', appDir + '/**/*.php']
		}
	};

	// Production
	config.production = {
		cssSrc: appDir + '/*.css',
		cssDest: appDir,
		jsSrc: _assets.scripts + '*.js',
		jsDest: _assets.scripts
	};

	// expose the merged config
	return merge(config, options);
	config.init = {
		srcDir: p.join(p.dirname(module.filename),'_src'),
		cwd: appDir,
		manifestPath: p.join(appDir, 'package.json'),
		dependencies: ['sassqwatch'],
		devDependencies: ['gulp', 'browserify-ejs', 'browserify-shim'],
		stuffToAppend: {
			'browserify': {
				'transform': ['browserify-shim', 'browserify-ejs'],
			},
			'browser': { "waitFor": "./_src/js/lib/waitFor.js" },
			'browserify-shim': { "jquery": "global:$" }
		}
	};
};