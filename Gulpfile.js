'use strict';

var gulp = require('gulp'),
  config = require('./build/config'),
  requireDir = require('require-dir'),
  runSequence = require('run-sequence');

// Load All Gulp Tasks
requireDir('./build/tasks', { recurse: true });

// Dev task
gulp.task('build:dev', function (done) {
  runSequence(['clean:dist'], [
    'styles',
    'lint',
    'browserify:vendor',
    'browserify:dev'
  ], [
    'copy-html',
    'copy-images',
    'copy-fonts',
    'copy-config',
    'copy-langs'
  ], done);
});


// Dev task
gulp.task('build:prod', function (done) {
  runSequence(['clean:dist'], [
    'styles',
    'lint',
    'browserify:prod'
  ], [
    'copy-html',
    'copy-images',
    'copy-fonts',
    'copy-config',
    'copy-langs'
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
gulp.task('dev', function (done) {
  runSequence(['unit'], ['build:dev'], done);
});

// Dev task
gulp.task('prod', function (done) {
  runSequence(['unit'],['build:prod'], done);
});

// Default task
gulp.task('default', function (done) {
  runSequence('dev', 'watch');
});
