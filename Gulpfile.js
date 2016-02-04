'use strict';

var gulp = require('gulp'),
  config = require('./build/config'),
  requireDir = require('require-dir'),
  runSequence = require('run-sequence');

config.basedir = __dirname;

// Load All Gulp Tasks
requireDir('./build/tasks', { recurse: true });

// Dev task
gulp.task('compile', function (done) {
  runSequence(['clean:dist'], [
    'styles',
    'lint',
    'browserify:vendor',
    'browserify:app'
  ], [
    'copy-static'
  ], done);
});

// Clean task
gulp.task('unit', function (done) {
  runSequence(
    ['clean:testResults'],
    ['specRunner'],
    ['clean:test'],
    done);
});

// Dev task
gulp.task('build', function (done) {
  runSequence(['unit'], ['compile'], done);
});

// Default task
gulp.task('default', function (done) {
  runSequence('build', 'watch');
});
