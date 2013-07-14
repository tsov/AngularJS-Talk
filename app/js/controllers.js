'use strict';

angular.module('angular.controllers', []).
  controller('ngAnimateCtrl', ['$scope', function($scope) {

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