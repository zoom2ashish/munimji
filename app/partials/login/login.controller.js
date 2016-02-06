(function(){

let LoginCtrl = function($state) {
  this.title = 'Sign-In';
  this.user = '';
  this.password = '';

  this.signIn = function(user) {
    setTimeout(() => {
      $state.go('home.recent');
    });
  };
};

LoginCtrl.$inject = ['$state'];

module.exports = LoginCtrl;
})();