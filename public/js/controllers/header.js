angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Articles",
        "link": "articles"
    }, {
        "title": "Create New Article",
        "link": "articles/create"
    }, {
        "title": "Doctors",
        "link": "doctors"
    }, {
        "title": "Create New Doctor",
        "link": "doctors/create"
    }];
}]);