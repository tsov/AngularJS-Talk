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
    {title: 'Live Demo', id: 'directives_demo2'},
    {title: 'Doing things declaratively', id: 'declarative'},
    {title: 'Web Components', id: 'components'},
    {title: 'A little organization', id: 'organization'},
    {title: 'Writing Controllers', id: 'writing_controllers'},
    {title: 'Writing Directives', id: 'writing_directives'},
    {title: 'Constants', id: 'constants'},
    {title: 'Dependency Injection', id: 'di'},
    {title: 'Modules', id: 'modules'},
    {title: 'Directives revisited', id: 'revisited'},
    {title: 'Compilation', id: 'compilation'},
    {title: 'compile function', id: 'compile'},
    {title: 'Linking', id: 'linking'},
    {title: 'Ticker Directive', id: 'ticker'},
    {title: 'Ticker Template', id: 'ticker_template'},
    {title: 'Ticker Controller', id: 'ticker_controller'},
    {title: 'Live Demo', id: 'ticker_demo'},
    {title: 'Testing your code', id: 'testing'},
    {title: 'Unit Testing', id: 'unit_testing'},
    {title: 'Injecting mocks', id: 'injecting_mocks'},
    {title: 'How?', id: 'how_di_testing'},
    {title: 'Live Demo', id: 'controllers_test_example'},
    {title: 'e2e Testing', id: 'e2e_testing'},
    {title: 'e2e example', id: 'e2e_example'},
    {title: 'Animations in AngularJS', id: 'animations_intro'},
    {title: 'ng-animate', id: 'ng_animate'},
    {title: 'CSS3 Animations', id: 'css3_animations'},
    {title: 'Live Demo', id: 'ng_animate_demo'},
    {title: 'Only CSS?', id: 'only_css'},
    {title: 'Where can I use ng-animate?', id: 'where_ng_animate'},
    {title: 'The End', id: 'end'},
    {title: 'Q&A', id: 'qa'}
  ]);
  
