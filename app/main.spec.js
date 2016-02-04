/* global angular */
'use strict';

describe('main.spec test:', function () {

  beforeEach(function () {
    angular.mock.module('mgApp');

    // Inject dependenceis
    //SearchResultItemModel
    //angular.mock.inject(['models.SearchResultItem', function (SearchResultItemModel) {
    //  _SearchResultItemModel = SearchResultItemModel;
    //}]);
  });

  it('should exist', function () {
    expect(true).toBe(true);
  });
});