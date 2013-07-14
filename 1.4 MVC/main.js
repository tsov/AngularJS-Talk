var app = angular.module("myApp",[]);

app.config(function ($routeProvider){
  $routeProvider.when("/",{templateUrl:"./home.html"})
								.when("/page_one",{templateUrl:"./page_one.html"})
								.when("/page_two",{templateUrl:"./page_two.html"})
								// .when("/page_two",{templateUrl:"./page_two.html",controller: "PagesController"})
								.otherwise({templateUrl:"./home.html"});
});

// app.controller("PagesController", function($scope){
// 	$scope.model = {message: "Whoop Whoop!"};
// });