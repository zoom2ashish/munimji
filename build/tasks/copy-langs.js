/**
* Add JSHint up task
*/

var config = require('../config');
var gulp = require('gulp');

// HTML Task
gulp.task('copy-langs', function () {
  gulp.src('./app/assets/i18n/**/*.json')
      .pipe(gulp.dest(config.dirs.dist + '/assets/i18n/'));
});
