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

app.controller('SecondController', ['$scope', function ($scope) {
    $scope.myObj = {
        ett: { 'state': 'locked' },
        två: { 'state': 'available' },
        tre: { 'state': 'locked' }
    };
    document.getElementById("knapp2").addEventListener("click", test2);
}]);