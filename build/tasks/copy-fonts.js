/**
* Add Clean up task
*/

var config = require('../config'),
  gulp = require('gulp');

// Clean task
gulp.task('copy-fonts', function () {
  gulp.src('app/assets/fonts/*.*')
    .pipe(gulp.dest(config.dirs.dist + '/assets/fonts/'));
});