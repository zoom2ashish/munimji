/* global angular */
/**
 * Authentication module, redirects to homepage if not logged in
 */

(function(){
  'use strict';

  const MODULE_NAME = 'common.authentication';

  function HttpProviderConfig ($httpProvider){
    // Intercepts every http request.  If the response is success, pass it through.  If the response is an
    // error, and that error is 401 (unauthorised) then the user isn't logged in, redirect to the login page
    var interceptor = function($q, $location, $rootScope) {
      return {
        'responseError': function(rejection) {
          if (rejection.status === 401) {
            $rootScope.$broadcast('event:unauthorized');
            $location.path('/login');
            return rejection;
          }
          return $q.reject(rejection);
        }
      };
    };

    // Set up interceptor
    $httpProvider.interceptors.push(interceptor);
  }

  HttpProviderConfig.$inject = ['$httpProvider'];

  angular.module(MODULE_NAME, ['ng'])
    .config(HttpProviderConfig);

  module.exports = MODULE_NAME;

})();