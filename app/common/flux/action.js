(function(){

  let dispatcher = require('./dispatcher')();

  class Action {
    constructor(type) {
      this._type = type;
      this._dispatcher = dispatcher;
    }

    execute() {
      return this._dispatcher.dispatch({action: this});
    }

    get type(){
      return this._type;
    }

    get dispatcher() {
      return this._dispatcher;
    }
  };

  module.exports = function() {
    return Action;
  };
})();