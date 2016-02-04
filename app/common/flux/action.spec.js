/* global angular */
'use strict';

let ActionModule = require('./action');
let Action, action;


describe('Test common.flux.action:', function () {

  beforeEach(function() {
    Action = ActionModule();
  });

  it('should have action class defined', function() {
    expect(Action).toBeDefined();
    action  = new Action('TestAction');

    expect(action.execute).toBeDefined();
    expect(action.type).toEqual('TestAction');
    expect(action.dispatcher).toBeDefined();

    spyOn(action.dispatcher, 'dispatch');
    action.execute();
    expect(action.dispatcher.dispatch).toHaveBeenCalled();
  });
});