/**
* Add Clean up task
*/

var config = require('../config'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

// Clean task
// Styles task
gulp.task('styles', function () {
  gulp.src('app/assets/styles/styles.less')
    .pipe(less())
    // Optionally add autoprefixer
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    // These last two should look familiar now :)
    .pipe(gulp.dest(config.dirs.dist + '/assets/styles/'));

  gulp.src(config.sass.src )
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(config.sass.dest));
});

gulp.task('sass', function () {
  console.log(config.sass.src + '->'+ config.sass.dest);

});