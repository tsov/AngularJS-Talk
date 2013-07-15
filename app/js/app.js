'use strict';

angular.module('angular', ['angular.filters', 'angular.services', 'angular.directives', 'angular.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/ng-animate', {templateUrl: 'partials/ng-animate-example.html'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
