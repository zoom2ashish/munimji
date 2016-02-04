/* global angular */
(function(){
  'use strict';

  const CHANGE_EVENT = 'CHANGE_EVENT';

  let EventEmitter = require('events').EventEmitter;

  class Store {
    /**
     * @public
     * @param {Dispatcher} dispatcher
     */
    constructor(dispatcher) {
      let _this = this;

      this._changeEvent = CHANGE_EVENT;
      this._emitter = new EventEmitter();
      this._dispatcher = dispatcher;
      this._dispatchToken = dispatcher.register(function (payload) {
        _this._invokeOnDispatch(payload);
      });
    }

    /**
    * @public
    * @param {function} callback Store Change Event handler function
    */
    addListener(callback) {
     this._emitter.addListener(CHANGE_EVENT, callback);
    }

    /**
    * @public
    * @return {Dispatcher} The dispatcher that this store is registered with.
    */
    getDispatcher() {
      return this._dispatcher;
    }

  /**
   * @public
   * @return {string} A string the dispatcher uses to identify each store's
   *   registered callback. This is used with the dispatcher's waitFor method
   *   to declaratively depend on other stores updating themselves first.
   */
    getDispatchToken () {
      return this._dispatchToken;
    }

    /**
    * @protected
    * Emit an event notifying listeners that the state of the store has changed.
    */
    _emitChange() {
      this._emitter.emit(this._changeEvent);
    }


    /**
     * This method encapsulates all logic for invoking __onDispatch. It should
     * be used for things like catching changes and emitting them after the
     * subclass has handled a payload.
     *
     * @protected
     * @param {object} payload The data dispatched by the dispatcher, describing
     *   something that has happened in the real world: the user clicked, the
     *   server responded, time passed, etc.
     */
     _invokeOnDispatch(payload) {
      this._onDispatch(payload);
    }

    /**
     * The callback that will be registered with the dispatcher during
     * instantiation. Subclasses must override this method. This callback is the
     * only way the store receives new data.
     *
     * @protected
     * @override
     * @param {object} payload The data dispatched by the dispatcher, describing
     *   something that has happened in the real world: the user clicked, the
     *   server responded, time passed, etc.
     */
    _onDispatch(payload) {
      throw new Error('Store._onDispatch method is not overridden by ' + this.name);
    }
  };

  module.exports = function() {
    return Store;
  };

})();