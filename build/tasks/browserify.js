/**
* Add JSHint up task
*/

var config = require('../config');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var istanbul = require('browserify-istanbul');


// Browserify Vendor files
gulp.task('browserify:vendor', function(){
    var bundler = browserify({
        debug: false
    });


    var libs = config.vendors.libs;
    libs.forEach(function(lib){
        if(lib.expose) {
            bundler.require(lib.require, {expose: lib.expose})
        } else{
            bundler.require(lib.require)
        }
    });

    var stream = bundler
        .bundle()
        .on('error', function(err){
          // print the error (can replace with gulp-util)
          console.log(err.message);
          // end this stream
          this.emit('end');
        })
        .pipe(source('vendor.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.dirs.dist));

    return stream;
});

// Browserify task
gulp.task('browserify:app', function () {
    var bundler = browserify({ debug: true });

    var libs = config.vendors.libs;
    libs.forEach(function(lib){
        bundler.external(lib.require)
    });

    return bundler
        .transform('brfs')
        .transform('babelify', {
          ignore: /node_modules/,
          presets: ["es2015"]
        })
        .require(config.dirs.src + '/main.js', { entry: true })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.dirs.dist))
});