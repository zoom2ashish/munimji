/**
* Add JSHint up task
*/

var config = require('../config');
var gulp = require('gulp');

// HTML Task
gulp.task('copy-config', function () {
  gulp.src('./app/config/*.json')
      .pipe(gulp.dest(config.dirs.dist + '/config/'));
});
