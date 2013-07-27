'use strict';

angular.module('angular.animations', [])

  .animation('todo-enter', function() {
    return {
      setup: function(element) {
        $(element).css({
          "position":"relative",
          "left":"-200px",
          "line-height": "0px",
          "opacity": "0"
        });
      },
      start: function(element, done) {
        $(element).animate({
          "left":"0",
          "line-height": "20px",
          "opacity": "1"
        }, 200, function() {
          done();
        });
      }
    };
  })

  .animation('todo-leave', function() {
    return {
      setup: function(element) {
        $(element).css({
          "position": "relative"
        });
      },
      start: function(element, done) {
        $(element).animate({
          "left":"200",
          "line-height": "0px",
          "opacity": "0"
        }, 200, function() {
          done();
        });
      }
    };
  });