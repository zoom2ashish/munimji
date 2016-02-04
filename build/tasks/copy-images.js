/**
* Add Clean up task
*/

var config = require('../config');
var gulp = require('gulp');

// Clean task
gulp.task('copy-images', function () {
  gulp.src('./app/assets/images/*.*')
    .pipe(gulp.dest(config.dirs.dist + '/assets/images/'));
});