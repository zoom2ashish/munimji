/**
* Add JSHint up task
*/

var config = require('../config');
var gulp = require('gulp');

console.log('Fonts: ' + config.fonts.dest);
console.log('html: ' + config.html.dest);
console.log('json: ' + config.json.dest);

// HTML Task
gulp.task('copy-static', function () {
  // Copy fonts
  gulp.src(config.fonts.src).pipe(gulp.dest(config.fonts.dest));

  // Copy Html
  gulp.src(config.html.src).pipe(gulp.dest(config.html.dest));

  // Copy JSON
  gulp.src(config.json.src).pipe(gulp.dest(config.json.dest));

  // Copy Images
  gulp.src(config.images.src).pipe(gulp.dest(config.images.dest));

  // Copy Static CSS
  gulp.src(config.css.src).pipe(gulp.dest(config.css.dest));
});
