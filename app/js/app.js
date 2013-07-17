'use strict';

angular.module('angular', ['angular.filters', 'angular.services', 'angular.directives', 'angular.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/bindings', {templateUrl: 'partials/bindings.html'});
    $routeProvider.when('/directives', {templateUrl: 'partials/directives.html'});
    $routeProvider.when('/controllers-scope', {templateUrl: 'partials/controllers_scope.html'});
    $routeProvider.when('/ng-animate', {templateUrl: 'partials/ng-animate-example.html'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
