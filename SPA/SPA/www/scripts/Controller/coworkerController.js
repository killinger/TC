app.controller('coworkerController', ['$scope', function ($scope) {
    $scope.myObj = {
        ett: { 'state': 'locked' },
        två: { 'state': 'available' },
        tre: { 'state': 'locked' }
    };

    $scope.test = true;

    $scope.dateFromFile = new Date();

    $scope.checkDate = function(){

    };

    $scope.readFiles = function(){
        readFileDate2();
    }

    $scope.makeFile = function () {
        makeFile();
     
    }
}]);