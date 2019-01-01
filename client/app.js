var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'insurController'
		})
		.when('/insurance', {
			templateUrl:'templates/list.html',
			controller:'insurController'
		})
		.when('/insurance/add', {
			templateUrl:'templates/add.html',
			controller:'insurController'
		})
		.when('/insurance/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'insurController'
		})
		.when('/insurance/:id/show', {
			templateUrl:'templates/show.html',
			controller:'insurController'
		});
});
