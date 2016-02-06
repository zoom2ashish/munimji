(function(){

let RecentReceiptsCtrl = function($state) {
  this.items = [
    'Ashish',
    'Sonal',
    'Nishka'
  ];
};

RecentReceiptsCtrl.$inject = ['$state'];

module.exports = RecentReceiptsCtrl;
})();
