/* global angular */
'use strict';

let StoreModule = require('./store');
let dispatcher = require('./dispatcher')();
let Store, store;


describe('Test common.flux.store:', function () {

  beforeEach(function() {

    Store = StoreModule();
  });

  it('Should be initialized and dispatcher registered', function(){
    spyOn(dispatcher, 'register');

    store = new Store(dispatcher);

    expect(dispatcher.register).toHaveBeenCalled();
    expect(store.getDispatcher()).toBe(dispatcher);
    expect(store.getDispatchToken).toBeDefined();
  });

  it('should have dispatch token initialized', function (){
    store = new Store(dispatcher);
    expect(store.getDispatchToken()).toBeDefined();
  });

  it('Should have event emitter initialized', function() {
    expect(store).toBeDefined();
    expect(store._emitter).toBeDefined();
  });

  it('_onDispatch should throw an error', function() {
    expect(store._onDispatch).toThrow();
  });

  it('Should have addListener', function(){
    expect(store.addListener).toBeDefined();
  });

  it('addListner should add event handler', function(){

    var handler = {
      callback: function() {
      }
    };

    spyOn(handler, 'callback');

    store.addListener(handler.callback);

    store._emitChange();
    expect(handler.callback).toHaveBeenCalled();
  });

  it('should call _onDispatch on action handler', function() {
    spyOn(store, '_onDispatch');

    dispatcher.dispatch({ type: 'test'});

    expect(store._onDispatch).toHaveBeenCalled();
  });
});