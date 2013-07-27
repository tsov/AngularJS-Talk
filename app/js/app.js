'use strict';

angular.module('angular', ['angular.filters', 'angular.services', 'angular.directives', 'angular.controllers', 'angular.animations']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/bindings', {templateUrl: 'partials/bindings.html'});
    $routeProvider.when('/directives', {templateUrl: 'partials/directives.html'});
    $routeProvider.when('/controllers-scope', {templateUrl: 'partials/controllers_scope.html'});
    $routeProvider.when('/ng-animate', {templateUrl: 'partials/ng-animate-example.html'});
    $routeProvider.when('/testing', {templateUrl: 'partials/testing.html'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
