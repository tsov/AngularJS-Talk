'use strict';

angular.module('angular.directives', []).
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
            '<small ng-show="(slide != 0 && $index != 1) || (slide == 0 && $index != 0)">{{item}}</small> ' +
            '<span ng-show="(slide != 0 && $index == 1) || (slide == 0 && $index == 0)">{{item}}</span> ' +
          '</span>' +
        '</h1>'
    };
  });
