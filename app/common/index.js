/* global angular */
/**
* @name index.js
* @description Defines Top level common modules
*       Has dependencies on Angular (vendor.js)
*/
(function(){
    'use strict';

    const MODULE_NAME = 'common';

    // Load Submodules
    let auth = require('./authentication/authentication');
    let bindToTmpl = require('./bindscopetotemplate/bindscopetotemplate');
    let translation = require('./translation/translation');
    let flux = require('./flux');

    /// Define Angular Module
    angular.module(MODULE_NAME, [
      auth,
      bindToTmpl,
      translation,
      flux
    ]);

    module.exports = MODULE_NAME;

})();