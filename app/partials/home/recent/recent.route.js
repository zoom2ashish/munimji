(function(){

let fs = require('fs');

var recentRouteConfig = function($stateProvider) {
  $stateProvider
    .state('home.recent', {
      url: '/recent',
      views: {
        'recent-tab': {
          template: fs.readFileSync(__dirname + '/recent.tpl.html'),
          controller: 'RecentCtrl',
          controllerAs: 'vm'
       }
      }
    });
  };

recentRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = recentRouteConfig;
})();
