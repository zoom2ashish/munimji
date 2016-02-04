/**
* Add Clean up task
*/

var config = require('../config');
var gulp = require('gulp');
var del = require('del');

// Clean task
gulp.task('clean:dist', function () {
  return del([
    config.dirs.dist + '**/*'
  ]);
});

// Clean test task
gulp.task('clean:test', function () {
  return del([
    config.dirs.test + '/*.js'
  ]);
});

// Clean test-reports
gulp.task('clean:testResults', function () {
  return del([
    config.dirs.test + '/**/*'
  ]);
});