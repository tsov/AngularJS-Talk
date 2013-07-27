'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('angular.controllers'));
  var scope, ctrl;

  describe('todoCtrl', function() {

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('todoCtrl', {
        $scope: scope,
        $element: null,
        $attrs: null
      });
    }));

    it('#remainingItems', function() {
      expect(scope.remainingItems().length).toEqual(2);
    });

    it('#addTodo', function() {
      scope.newTodo = 'new todo';
      scope.addTodo();
      expect(scope.items).toContain({name:'new todo', done:false});
    });

    it('#archiveDone', function() {
      scope.archiveDone();
      expect(scope.items.length).toEqual(2)
    });

  });


});
