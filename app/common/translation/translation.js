/* global angular */
(function(){
 'use strict';

 const MODULE_NAME = 'common.translation';
 const LANGUAGE_URL_TMPL = '/assets/i18n/{part}/{lang}.json';

  let ngTranslate = require('angular-translate');
  let ngTranslateHandlerLog = require('angular-translate-handler-log');
  let ngTranslateLoaderPartial = require('angular-translate-loader-partial');
  let ngTranslateInterpolationMessageFormat = require('angular-translate-interpolation-messageformat');
  let ngTranslateStorageCookie = require('angular-translate-storage-cookie');
  let ngTranslateLoaderUrl = require('angular-translate-loader-url');
  let ngTranslateStorageLocal = require('angular-translate-storage-local');

  /**
  * Translation Provider
  * @name TranslationProvider
  * @param {Object} $translationProbvider translation provider from ngTranslate
  */
  function TranslationConfig ($translateProvider) {
      $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: LANGUAGE_URL_TMPL
      });

    // Set Security Settigns
    $translateProvider.useSanitizeValueStrategy('sanitize');

    // Set Preferred Language
    $translateProvider.preferredLanguage('en-US');
    $translateProvider.fallbackLanguage('en-US');
  }

  TranslationConfig.$inject = ['$translateProvider'];


  /**
  * Run Module for Translation/Language change handling
  */
  function TranslationChangeEventSubscriber ($rootScope, $translate) {
      $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
        $translate.refresh();
      });
  }

  TranslationChangeEventSubscriber.$inject = ['$rootScope', '$translate'];


  // Add Modules to Angular
  angular.module(MODULE_NAME, [
    'ng',
    ngTranslate, // 'pascalprecht.translate'
    ngTranslateHandlerLog,
    ngTranslateLoaderPartial,
    ngTranslateLoaderUrl,
    ngTranslateStorageCookie,
    ngTranslateStorageLocal,
    ngTranslateInterpolationMessageFormat
    ])
      .config(TranslationConfig)
      .run(TranslationChangeEventSubscriber);


  module.exports = MODULE_NAME;

})();