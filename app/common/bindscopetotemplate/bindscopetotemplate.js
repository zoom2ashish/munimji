/* global angular */
(function(){
  'use strict';

  const MODULE_NAME = 'common.bindScopeToTemplate';

  function runAddScopeToTemplate ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }

  runAddScopeToTemplate.$inject = [ '$rootScope', '$state', '$stateParams' ];

  /**
   * Add $state and $stateParams to the $rootScope so they are accessible from template
   * Reference: https://github.com/angular-ui/ui-router/wiki/Quick-Reference#note-about-using-state-within-a-template
   */
  angular.module(MODULE_NAME, ['ng', 'ui.router']).run(runAddScopeToTemplate);

  module.exports = MODULE_NAME;
})();
