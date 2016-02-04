/* global angular */
/**
* @name index.js
* @description Defines Top level common modules
*       Has dependencies on Angular (vendor.js)
*/
(function(){
  'use strict';

  const MODULE_NAME = 'common.flux';

  let dispatcher = require('./dispatcher');
  let store = require('./store');
  let action = require('./action');

  // Define Angular Module
  angular.module(MODULE_NAME, [])
    .factory('dispatcher', dispatcher)
    .factory('store', store)
    .factory('action', action);

  module.exports = MODULE_NAME;

})();