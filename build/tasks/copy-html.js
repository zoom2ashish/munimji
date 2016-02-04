/**
* Add JSHint up task
*/

var config = require('../config');
var gulp = require('gulp');

// HTML Task
gulp.task('copy-html', function () {
  // Any other view files from app/views
  gulp.src('./app/index.html')
  // Will be put in the dist/views folder
  .pipe(gulp.dest(config.dirs.dist));
});
