/**
* @name karma.conf.js
* @description Karma TestRunner Configuration
*/

var config = require('./config');
var istanbul = require('browserify-istanbul');
var babelify = require("babelify");
var resolve = require('resolve');

console.log()
var files = config.karma.files;
console.log('Files' +  files);

var filesToBrowserify = {};
files.forEach(function(file){
 filesToBrowserify[file] = ['browserify']
});

module.exports = function (karma) {
  karma.set({
    /**
    * Set app root folder as base folder
    */
    basePath: config.basedir + '/',

    /**
    * List of files/patterns to load in the browser.
    */
    files: files,

    /**
    * List Browsers To be Test
    */
    browsers: ['Chrome'],

    /**
    * List all frameworks to be used for testing
    */
    frameworks: ['browserify', 'jasmine'],

    /**
    * Test coverage reporters
    */
    reporters: ['progress', 'coverage', 'html'],

    // optionally, configure the reporter 
    coverageReporter: {
      dir: config.dirs.test,
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }        
      ]
    },

    /**
    * Provide testmodule Preprocessing configuration
    */
    preprocessors: filesToBrowserify,

    /**
    * Provided Browserify configuraiton
    */
    browserify: {
      debug: true,
      transform: ['brfs', istanbul({
        ignore: [
          '**/node_modules/**',
          'app/**/*spec.js'
        ],
        defaultIgnore: true
      }),
      babelify.configure({
        ignore: [
          '**/node_modules/**'//, 'app/**/*spec.js'
        ],
        presets: ["es2015"]
      }),
      "browserify-shim"
      ]
    },

    /**
    * List all Plugins required for running testcases
    */
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-ie-launcher',
      'karma-coverage',
      'karma-browserify'
    ],

    /**
    * Define Log Level
    */
    logLevel: 'LOG_DEBUG',

    /**
     * logs
     */
    loggers: [
      { type: 'console' },
      { type: 'file', filename: config.dirs.test + '/karma.log' }
    ],

    /**
    * Enable autoWatch for quick and easy test re-execution once files change
    */
    autoWatch: true
  });
};