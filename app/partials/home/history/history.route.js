(function(){

let fs = require('fs');

var routeConfig = function($stateProvider) {
  $stateProvider
    .state('home.history', {
      url: '/history',
      views: {
        'history-tab': {
          template: fs.readFileSync(__dirname + '/history.tpl.html'),
          controller: 'HistoryCtrl',
          controllerAs: 'vm'
       }
      }
    });
  };

routeConfig.$inject = ['$stateProvider'];

module.exports = routeConfig;
})();
