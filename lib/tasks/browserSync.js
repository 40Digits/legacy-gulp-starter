module.exports = function(gulp, plugins, config) {
  config = config.browserSync;
  return function() {
  	if (config.useBrowserSync)
  		plugins.browserSync.init(config.config);
  };
};