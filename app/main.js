(function () {
  /**
   * @ngdoc overview
   * @name app.module
   * @description Defines application module and also loads dependencies
   * @requries angular - Angular Framework
   * @requires jquery - jQuery Framework
   * @requires bootstrap - Bootstrap CSS Framework
   * Main module of the application.
   */

  'use strict';

  const APP_NAME = 'mgApp';

  // Load External Libraries
  window.$ = window.jQuery = require('jquery');
  window._ = require('underscore');

  // Load Angular
  let angular = window.angular = require('angular'); // That's right! We can just require angular as if we were in node
  let ngAnimate = require('angular-animate');
  let ngSanitize = require('angular-sanitize');
  let uiRouter = require('angular-ui-router');

  // Load Ionic
  require('ionic');
  require('ionic-angular');
  let ionic = 'ionic';

  // Load Application's modules
  let commonModule = require('./common');
  let configModule = require('./config');
  let loginModule = require('./partials/login');

  let app = null;

  // Check if the module is already created, Else create the module
  try {
    app = angular.module(APP_NAME);
  } catch (e) {
    app = angular.module(APP_NAME, [
      ngAnimate,
      ngSanitize,
      uiRouter,
      ionic,
      commonModule,
      configModule,
      loginModule
    ]);
  }

  app.run(['$translate', '$translatePartialLoader', function($translate, $translatePartialLoader){
    $translatePartialLoader.addPart('main');

    setTimeout(function(){
      $translate.use('fr-FR');
    }, 3000);
  }]);

})();