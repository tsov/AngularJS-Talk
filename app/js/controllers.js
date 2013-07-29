'use strict';

angular.module('angular.controllers', []).
  controller('PresentationController', ['$scope', '$routeParams', '$location', 'outline', function($scope, $routeParams, $location, outline) {
    $scope.$on('$routeChangeSuccess', function(event, current) {
      $scope.slide = current.params.slide;
    });
    $scope.outline = outline;
    $scope.navigate = function(e) {
      var newSlide;
      if (e.keyCode == 37) {
        // left
        if ($routeParams.slide > 0) {
          newSlide = parseInt($routeParams.slide) - 1;
          $location.path('/' + newSlide);
          $scope.slide = newSlide;
        }
      } else if (e.keyCode == 39) {
        // right
        newSlide = parseInt($routeParams.slide) + 1;
        $location.path('/' + newSlide);
        $scope.slide = newSlide;
      }
    };
    $scope.navigateLeft = function() {
      $scope.navigate({keyCode:37});
    };
    $scope.navigateRight = function() {
      $scope.navigate({keyCode:39});
    };
  }])

  .controller('DirectivesDemoController', ['$scope', function($scope) {
    $scope.items = [];
    $scope.$watch('count', function(newValue, oldValue) {
      $scope.items = [];
      for (var i = 0; i < newValue; i++) {
        $scope.items.push({index: i});
      }
    });
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

  .controller('myController', ['$scope', function($scope) {
    // $scope.data = {message: "Whoop Whoop!"};
  }])

  .controller('ngAnimateCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.items = [
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random()
    ];

    $scope.populate = function() {
      $timeout(function() {
        $scope.items.unshift(Math.random());
        $scope.items.pop();
        $scope.populate();
      }, $scope.interval || 1000);
    };

    $scope.populate();

  }]);