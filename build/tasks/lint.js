/**
* Add JSHint up task
*/

var config = require('../config');
var gulp = require('gulp');
var jshint = require('gulp-jshint');

// JSHint task
gulp.task('lint', function () {
  gulp.src('app/**/!(*spec).js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});