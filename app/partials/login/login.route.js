(function(){

let fs = require('fs');

var loginRouteConfig = function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        'main': {
          template: fs.readFileSync(__dirname + '/login.tpl.html'),
          controller: 'LoginController',
          controllerAs: 'vm'
        }
      }
    })

    $urlRouterProvider.otherwise('/login');
};

loginRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = loginRouteConfig;
})();
