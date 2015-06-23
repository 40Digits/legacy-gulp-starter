// Gulp options/settings for tasks.
var config = {
  // Paths
  appDir: './',
  assetsDir: './assets',
  sourceDir: './_src'
};

// Source Directory
config._source = {
  root:     config.sourceDir,
  images:   config.sourceDir + '/images/**/*',
  scripts:  config.sourceDir + '/js/',
  sprites:  config.sourceDir + '/sprites/*.png',
  styles:   config.sourceDir + '/sass/**/*.{sass,scss}',
  symbols:  config.sourceDir + '/symbols/*.svg',
  tpl:      config.sourceDir + '/symbols/tpl/',
  static:   config.sourceDir + '/static/',
  php:      config.appDir + '**/*.php'
};

// Assets Directory
config._assets = {
  root:     config.assetsDir,
  images:   config.assetsDir + '/images/',
  scripts:  config.assetsDir + '/js/',
  sprites:  config.assetsDir + '/images/sprites/',
  styles:   config.assetsDir + '/css/',
  symbols:  config.assetsDir + '/fonts/symbols/',
  static:   config.appDir
};

// Browserify
config.browserify = {
  debug: false,
  src: config._source.scripts,
  bundleConfigs: [{
    entries: [],
    dest: config._assets.scripts,
    outputName: 'main.js',
    sourceJS: config._source.scripts + 'main.js',
    configJS: config._source.scripts + 'config/configMain.js'
  }]
};

// Sass
config.sass = {
  src: config._source.styles,
  dest: config.appDir,
  options: {
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
  src: config._source.sprites,
  destSprites: config._assets.sprites,
  destSass: config._source.root + '/sass/helpers',
  options: {
    retina: true,
    style: '_sprites.scss',
    cssPath: config._assets.sprites,
    processor: 'scss',
    orientation: 'binary-tree',
    prefix: 'sprite'
  }
};

// Symbols
config.symbols = {
  src: config._source.symbols,
  tplCss: config._source.tpl + 'symbols.tpl.css',
  tplSass: config._source.tpl + 'symbols.tpl.scss',
  tplHtml: config._source.tpl + 'symbols.tpl.html',
  destFont: config._assets.symbols,
  destSass: config._source.root + '/sass/helpers',
  options: {
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
  src: config._source.static,
  dest: config._assets.static,
  extension: ".html",
  options: {
    prefix: '@@',
    basepath: '/'
  },
};

// Images
config.images = {
  src: config._source.images,
  dest: config._assets.images,
  options: {
    progressive: true,
    optimizationLevel: 4
  }
};

// PHP
config.php = {
  src: config._source.php
};

// Watch
config.watch = {
  src: config._source.root,
  dest: config._assets.root,
};

// BrowserSync
config.browserSync = {
  useBrowserSync: false,
  // See http://www.browsersync.io/docs/options/ for a complete list of configuration options
  config: {
    // proxy: 'yourvhostname.dev',
    server: config.appDir,
    open: true,
    notify: false,
    reloadOnRestart: true,
    files: ['**/*.css', config.assetsDir + '**/*', config.appDir + '**/*.php']
  }
};

// Production
config.production = {
  cssSrc: config.appDir + '*.css',
  cssDest: config.appDir,
  jsSrc: config._assets.scripts + '*.js',
  jsDest: config._assets.scripts
};

// Expose the config object
module.exports = config;