/**
* Build Configuration
*/
var dirs = {
  build: './build',
  dist: './www',
  src: './app',
  test: './test-reports',
  libs: './libs'
};

module.exports = {
  basedir: __dirname + '/../',
  dirs:  dirs,
  livereload:{
    clientport: 35729,
    serverport: 5000,
    source: dirs.dist
  },
  browserify: {
    entryfile: 'main.js'
  },
  fonts: {
    src: 'libs/ionic/fonts/*.*',
    dest: dirs.dist + '/assets/fonts'
  },
  html: {
    src: 'app/index.html',
    dest: dirs.dist
  },
  json: {
    src: 'app/**/*.json',
    dest: dirs.dist
  },
  sass: {
    src: 'app/assets/styles/styles.scss',
    dest: dirs.dist + '/assets/styles/'
  },
  images: {
    src: './app/assets/images/*.*',
    dest: dirs.dist + '/assets/images'
  },
  css: {
    src: 'libs/ionic/css/ionic.min.css',
    dest: dirs.dist + '/assets/styles/'
  },
  vendors:{
    libs: [
        { require: "angular", expose: 'angular' },
        { require: "jquery", expose: 'jquery' },
        { require: "underscore/underscore-min", expose: 'underscore' },
        { require: "angular-ui-router", expose: 'angular-ui-router' },
        { require: "angular-sanitize", expose: 'angular-sanitize' },
        { require: "angular-animate", expose: 'angular-animate' },
        { require: "angular-translate", expose: 'angular-translate' },
        { require: 'angular-translate-handler-log', expose: 'angular-translate-handler-log' },
        { require: 'angular-translate-loader-partial', expose: 'angular-translate-loader-partial' },
        { require: 'angular-translate-storage-cookie' , expose: 'angular-translate-storage-cookie'},
        { require: 'angular-translate-loader-url', expose: 'angular-translate-loader-url' },
        { require: 'angular-translate-storage-local', expose: 'angular-translate-storage-local' },
        { require: 'angular-translate-interpolation-messageformat', expose: 'angular-translate-interpolation-messageformat' },
        { require: './libs/ionic/js/ionic.min.js', expose: 'ionic' },
        { require: './libs/ionic/js/ionic-angular.min.js', expose: 'ionic-angular' }
    ]
  },
  karma: {
    files: [
      // App specific code
      'app/main.js',
      // 3rd party resources
      'node_modules/angular-mocks/angular-mocks.js',
      // test files
      'app/**/*.spec.js'
    ],
    coverage: {
      ignore: [
        '**/node_modules/**',
      'app/**/*spec.js'
      ]
    }
  },
  watch: {
  }
};