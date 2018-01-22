var routingProjectApp = angular.module('routingProjectApp', ['ngRoute']);

routingProjectApp.config(['$locationProvider', function($locationProvider){
    $locationProvider.hashPrefix('');
}]);

routingProjectApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when ('/', {
        templateUrl : "html/main.htm"
    })
    .when ('/second', {
        templateUrl : "html/second.htm"
    });
}]);
