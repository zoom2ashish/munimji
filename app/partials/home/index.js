(function(){

  let MODULE_NAME = 'home';

  let recentModule = require('./recent');
  let historyModule = require('./history');
  let addReceiptModule = require('./addreceipt');

  angular.module(MODULE_NAME, [
    'ui.router',
    'ngAnimate',
    recentModule,
    historyModule,
    addReceiptModule
  ]).config(require('./home.route'))
    .run(['$translatePartialLoader', function($translatePartialLoader){
      $translatePartialLoader.addPart('main');
    }]);

  module.exports = MODULE_NAME;
})();