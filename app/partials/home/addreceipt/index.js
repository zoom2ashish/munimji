(function(){

  let MODULE_NAME = 'addReceipt';

  angular.module(MODULE_NAME, ['ui.router', 'ngAnimate'])
    .config(require('./addreceipt.route'))
    .run(['$translatePartialLoader', function($translatePartialLoader){
        $translatePartialLoader.addPart('addreceipt');
      }])
    .controller('AddReceiptCtrl', require('./addreceipt.controller'))
    ;
  module.exports = MODULE_NAME;
})();