app.controller('SecondController', ['$scope', function ($scope) {
    $scope.myObj = {
        ett: { 'state': 'locked' },
        två: { 'state': 'available' },
        tre: { 'state': 'locked' }
    };
    $scope.test = function () {
        //alert("twat");
        readFileDate1();
    }
    $scope.readFiles = function(){
        readFileDate2();
    }

    $scope.makeFile = function () {
        makeFile();
     
    }
}]);