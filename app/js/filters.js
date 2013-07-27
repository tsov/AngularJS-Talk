'use strict';

/* Filters */

angular.module('angular.filters', []).
  filter('paged', [function() {
    return function(rows, currentPage) {
      var rows_per_page = 5
      var start = (currentPage - 1) * rows_per_page;
      var end = start + (rows_per_page - 1);
      var filtered = [ ];
      for (var i = start; start < end; start++) {
        filtered.push(rows[i])
      }
      console.log(start);
      console.log(end);
      console.log(filtered);
      return filtered;
    }
  }]);
