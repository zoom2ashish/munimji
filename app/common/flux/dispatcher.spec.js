/* global angular */
'use strict';

describe('Test common.flux.dispatcher:', function () {
  var dispatcher = require('./dispatcher')();

  beforeEach(function () {
  });

  it('should exist', function () {
    expect(dispatcher).toBeDefined();
    expect(dispatcher.register).toBeDefined();
  });

  it('should call register on dispatch', function(){
    var action = {
      data: {
      },
      handler: function(){
      }
    };

    spyOn(action, 'handler');
    dispatcher.register(action.handler);
    dispatcher.dispatch(action.data);
    expect(action.handler).toHaveBeenCalled();
  });
});