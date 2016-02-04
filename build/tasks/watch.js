/**
* Live Reload Task
*/

var config = require('../config'),
  gulp = require('gulp'),
  // Modules for webserver and livereload
  express = require('express'),
  refresh = require('gulp-livereload'),
  livereload = require('connect-livereload'),
  livereloadport = 35729,
  serverport = 5000;

// Set up an express server (not starting it yet)
var server = express();
// Add live reload
server.use(livereload({ port: livereloadport }));
// Use our 'dist' folder as rootfolder
server.use(express.static(config.dirs.dist));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function (req, res) {
  res.sendfile('index.html', { root: 'dist' });
});

// Watch Task for changes and reload
gulp.task('watch', ['lint'], function () {
  // Start webserver
  server.listen(config.livereload.serverport);
  // Start live reload
  refresh.listen(config.livereload.clientport);

  // Watch our scripts, and when they change run lint and browserify
  gulp.watch(['app/**/*.js'], [ 'lint', 'browserify:dev']);

  // Watch our sass files
  gulp.watch(['app/**/*.less'], ['styles']);

  // Watch our sass files
  gulp.watch(['app/config/*.json'], ['copy-config']);

  // Watch for html file change
  gulp.watch(['app/**/*.html'], [ 'copy-html', 'browserify:dev' ]);

  gulp.watch('./dist/**').on('change', refresh.changed);

});