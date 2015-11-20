var app = angular.module('TeleCoaching', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

      .when('/', {
          templateUrl: 'main.html',
          controller: 'MainController'

      })

    .when('/second', {
        templateUrl: 'second.html',
        controller: 'SecondController'
    })

});

app.controller('MainController', ['$scope', function ($scope) {

}]);

