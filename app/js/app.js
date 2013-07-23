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
    ]);
