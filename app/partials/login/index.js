(function(){

  let MODULE_NAME = 'login';

  angular.module(MODULE_NAME, ['ui.router', 'ngAnimate'])
    .config(require('./login.route'))
    .controller('LoginController', require('./login.controller'))
    .run(['$translatePartialLoader', function($translatePartialLoader){
      $translatePartialLoader.addPart('login');
    }]);

  module.exports = MODULE_NAME;
})();