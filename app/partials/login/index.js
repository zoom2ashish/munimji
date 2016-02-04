(function(){

  let MODULE_NAME = 'login';

  angular.module(MODULE_NAME, ['ui.router'])
    .config(require('./login.route'))
    .controller('LoginController', require('./login.controller'));

  module.exports = MODULE_NAME;
})();