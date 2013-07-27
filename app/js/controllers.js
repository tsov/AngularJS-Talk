'use strict';

angular.module('angular.controllers', [])
  .controller('myController', ['$scope', function($scope) {
    // $scope.data = {message: "Whoop Whoop!"};
  }])

  .controller('todoCtrl', [ '$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    $scope.items = [
      {
        name: 'clean up',
        done: false
      },
      {
        name: 'shopping',
        done: true
      },
      {
        name: 'finances',
        done: false
      }
    ];

    $scope.remainingItems = function() {
      var remaining = [ ];
      $.each($scope.items, function(index, item) {
        if (!item.done) remaining.push(item);
      });
      return remaining;
    };

    $scope.archiveDone = function() {
      $scope.items = $scope.remainingItems();
    };

    $scope.addTodo = function(event) {
      if ((event && event.keyCode != 13) || !$scope.newTodo) return;
      $scope.items.push({name: $scope.newTodo, done: false});
      $scope.newTodo = '';
    }
  }])

  .controller('tableCtrl', [ '$scope', function($scope) {
    $scope.places = [
      {
        id: 1,
        name: 'name',
        description: 'description'
      }
    ];

    $scope.generatePlaces = function(iterations) {
      for (var i = 0; i < iterations; i++) {
        $scope.places[i] = { id: i, name: "place" + i, description: "description" + i };
      }
    };
  }])

  .controller('ngAnimateCtrl', ['$scope', function($scope) {

    $scope.messages = [
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        author: "Someone famous in Source Title"
      },
      {
        content: "Integer molestie lorem at massa",
        author: "Max Hoffmann"
      },
      {
        content: "Nulla volutpat aliquam velit",
        author: "Max Hoffmann"
      },
      {
        content: "Aenean sit amet erat nunc",
        author: "Max Hoffmann"
      },
      {
        content: "Ac tristique libero volutpat at",
        author: "Max Hoffmann"
      },
      {
        content: "Eget porttitor lorem",
        author: "Max Hoffmann"
      }
    ];

  }]);