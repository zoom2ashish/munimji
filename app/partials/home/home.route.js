(function(){

let fs = require('fs');

var homeRouteConfig = function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        'main': {
          template: fs.readFileSync(__dirname + '/home.tpl.html'),
          abstract: true
        }
      }
    });
};

homeRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = homeRouteConfig;
})();
