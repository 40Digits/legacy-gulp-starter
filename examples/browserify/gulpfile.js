var eta = require('gulp-eta');
var browserifyConfig = {
  bundles: [
    {
      outputName: 'main.js',
      entries: ['myCoolScript.js', 'anotherCoolScript.js']
    },
    {
      outputName: 'blog.js',
      entries: ['sweetBlogScript.js', 'anotherSweetBlogScript.js']
    }
  ]
};

gulp.tasks = eta({ browserify: browserifyConfig });