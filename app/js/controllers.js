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
  }])

  .controller('myController', ['$scope', function($scope) {
    // $scope.data = {message: "Whoop Whoop!"};
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