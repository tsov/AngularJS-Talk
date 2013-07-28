'use strict';

angular.module('angular', ['angular.filters', 'angular.services', 'angular.directives', 'angular.controllers', 'angular.animations']).
  config(['$routeProvider', 'outline', function($routeProvider, outline) {
    $routeProvider.when('/index.html', {redirectTo: '/0'});
    $routeProvider.when('/:slide', {templateUrl: function(params) { 
      var slideNo = parseInt(params.slide); 
      if (!slideNo) {
        slideNo = 0; 
      }

      var id = outline[slideNo].id;
      return 'partials/' + id + '.html' 
    }});
    $routeProvider.otherwise({redirectTo: '/0'});
  }]).
  constant('outline', [
    {title: 'Welcome', id: 'welcome'}, 
    {title: 'Brought to you by', id: 'by'},
    {title: 'See what sticks', id: 'topics'},
    {title: 'What is it?', id: 'what'}, 
    {title: 'How is it different?', id: 'different'},
    {title: 'MVC', id: 'mvc'},
    {title: 'Typical Controllers', id: 'typical'},
    {title: 'Purpose-Driven Controllers', id: 'controllers'},
    {title: 'MVVM', id: 'mvvm'},
    {title: 'Scope', id: 'scope'},
    {title: 'Bindings', id: 'bindings'},
    {title: 'Live Demo', id: 'bindings_demo'},
    {title: 'Directives', id: 'directives'},
    {title: 'Live Demo', id: 'directives_demo'},
    {title: 'Doing things declaratively', id: 'declarative'},
    {title: 'Web Components', id: 'components'},
    {title: 'A little organization', id: 'organization'},
    {title: 'Constants', id: 'constants'},
    {title: 'Writing Controllers', id: 'writing_controllers'},
    {title: 'Dependency Injection', id: 'di'},
    {title: 'Configuration', id: 'configuration'},
    {title: 'Modules', id: 'modules'},
    {title: 'Testing your code', id: 'testing'},
    {title: 'Unit Testing', id: 'unit_testing'},
    {title: 'Dependency Injection', id: 'dependency_injection'},
    {title: 'Live Demo', id: 'controllers_test_example'},
    {title: 'e2e Testing', id: 'e2e_testing'},
    {title: 'e2e example', id: 'e2e_example'},
    {title: 'Animations in AngularJS', id: 'animations_intro'},
    {title: 'ng-animate', id: 'ng_animate'},
    {title: 'CSS3 Animations', id: 'css3_animations'},
    {title: 'Live Demo', id: 'ng_animate_demo'},
    {title: 'Javascript Animation', id: 'javascript_animation'},
    {title: 'Where can I use ng-animate?', id: 'where_ng_animate'}
  ]);
