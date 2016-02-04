/* global angular */
(function(){
  'use strict';

  let Dispatcher = require('flux').Dispatcher;

  module.exports = function() {
    return new Dispatcher();
  };

})();