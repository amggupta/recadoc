angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Doctors",
        "link": "doctors"
    }, {
        "title": "Create New Doctor",
        "link": "doctors/create"
    }];
}]);