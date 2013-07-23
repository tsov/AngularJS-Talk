'use strict';

angular.module('angular', ['angular.filters', 'angular.services', 'angular.directives', 'angular.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index.html', {redirectTo: '/0'});
    $routeProvider.when('/:slide', {templateUrl: function(params) { return 'partials/slide' + params.slide + '.html' }});
    $routeProvider.otherwise({redirectTo: '/0'});
  }]).
  constant('outline', [
    'Welcome', 
    'Brought to you by',
    'See what sticks',
    'What is it?', 
    'How is it different?',
    'MVC',
    'Controllers',
    'Bindings',
    'Scope',
    'MVVM',
    'Directives',
    'Web Components',
    'Routes',
    'ngView',
    'A little organization',
    'Constants',
    'Configuration',
    'Dependency Injection',
    'Modules'
    ]).
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
  }]).
  directive('demoTicker', function() {
    return {
      restrict: 'A',
      scope: { 'feed': '=demoTicker', 'slide': '=slide' },
      controller: ['$scope', function($scope) {
        $scope.subset = [];
        $scope.$watch('slide', function(newValue, oldValue) {
          if ($scope.feed) {
            if (newValue) {
              if (newValue == 0) {
                $scope.subset = $scope.feed.slice(0, 3);
              } else {
                $scope.subset = $scope.feed.slice(parseInt(newValue) - 1, parseInt(newValue) + 2);
              }
            }
          }
        });
      }],
      template:
        '<h1>' + 
          '<span ng-repeat="item in subset">' +
            '<small>{{item}}</small>' +
          '</span>' +
        '</h1>'
    };
  });
