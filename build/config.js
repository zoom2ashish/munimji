/**
* Build Configuration
*/

module.exports = {
  dirs: {
    build: './build',
    dist: './www',
    src: './app',
    test: './test-reports'
  },
  livereload:{
    clientport: 35729,
    serverport: 5000,
    source: './dist'
  },
  browserify: {
    entryfile: 'main.js'
  },
  fonts: {
    src: 'libs/ionic/fonts/*.*',
    dist: this.dirs.dist + '/assets/fonts'
  },
  sass: {
    src: []
  },
  css: {
  },
  vendors:{
    libs: [
        { require: "angular", expose: 'angular' },
        { require: "jquery", expose: 'jquery' },
        { require: "underscore/underscore-min", expose: 'underscore' },
        { require: "angular-ui-router", expose: 'angular-ui-router'},
        { require: "angular-sanitize", expose: 'angular-sanitize'},
        { require: "angular-translate", expose: 'angular-translate' },
        { require: 'angular-translate-handler-log', expose: 'angular-translate-handler-log' },
        { require: 'angular-translate-loader-partial', expose: 'angular-translate-loader-partial' },
        { require: 'angular-translate-storage-cookie' , expose: 'angular-translate-storage-cookie'},
        { require: 'angular-translate-loader-url', expose: 'angular-translate-loader-url' },
        { require: 'angular-translate-storage-local', expose: 'angular-translate-storage-local' },
        { require: 'angular-translate-interpolation-messageformat', expose: 'angular-translate-interpolation-messageformat' },
        { require: './libs/ionic/js/ionic.js', expose: 'ionic' },
        { require: './libs/ionic/js/ionic-angular.js', expose: 'ionic-angular' }
    ]
  },
  karma: {
    coverage: {
      ignore: [
        '**/node_modules/**',
      'app/**/*spec.js'
      ]
    }
  }
};