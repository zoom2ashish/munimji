(function(){

  let MODULE_NAME = 'history';

  angular.module(MODULE_NAME, ['ui.router', 'ngAnimate'])
    .config(require('./history.route'))
    .run(['$translatePartialLoader', function($translatePartialLoader){
        $translatePartialLoader.addPart('history');
      }])
    .controller('HistoryCtrl', require('./history.controller'))
    ;
  module.exports = MODULE_NAME;
})();