(function(){

let fs = require('fs');

var routeConfig = function($stateProvider) {
  $stateProvider
    .state('home.addreceipt', {
      url: '/addreceipt',
      views: {
        'addreceipt-tab': {
          template: fs.readFileSync(__dirname + '/addreceipt.tpl.html'),
          controller: 'AddReceiptCtrl',
          controllerAs: 'vm'
       }
      }
    });
  };

routeConfig.$inject = ['$stateProvider'];

module.exports = routeConfig;
})();
