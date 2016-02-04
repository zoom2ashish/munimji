/**
* Add Clean up task
*/

var config = require('../config');
var gulp = require('gulp');
var karmaServer = require('karma').Server;;

gulp.task('specRunner', function (done) {
  console.log(__dirname + '/../karma.conf.js');
  karmaServer.start({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done);
});