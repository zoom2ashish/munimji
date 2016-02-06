(function(){

  let MODULE_NAME = 'recent';

  angular.module(MODULE_NAME, ['ui.router', 'ngAnimate'])
    .config(require('./recent.route'))
    .run(['$translatePartialLoader', function($translatePartialLoader){
        $translatePartialLoader.addPart('recent');
      }])
    .controller('RecentCtrl', require('./recent.controller'))


  module.exports = MODULE_NAME;
})();