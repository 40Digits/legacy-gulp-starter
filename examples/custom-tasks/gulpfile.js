var eta = require('gulp-eta');
var myTask = require('./myTask');

gulp.tasks = eta();

gulp.task('myTask', function() {
  return gulp.src('./mySrc')
    .pipe(myTask)
    .pipe(gulp.dest('./dist/mySrc'))
});