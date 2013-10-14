angular.module('mean.doctors').controller('DoctorsController', ['$scope', '$routeParams', '$location', 'Global', 'Doctors', function ($scope, $routeParams, $location, Global, Doctors) {
    $scope.global = Global;

    $scope.create = function() {
        var doctor = new Doctors({
            name: this.name,
            city: this.city
        });
        console.log('create handler at controller');
        
        doctor.$save(function(response) {
            $location.path("doctors/" + response._id);
        });

        this.name = "";
        this.city = "";
    };

    $scope.remove = function(doctor) {
        doctor.$remove();  

        for (var i in $scope.doctors) {
            if ($scope.doctors[i] == doctor) {
                $scope.doctors.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var doctor = $scope.doctor;
        if (!doctor.updated) {
            doctor.updated = [];
        }
        doctor.updated.push(new Date().getTime());

        doctor.$update(function() {
            $location.path('doctors/' + doctor._id);
        });
    };

    $scope.find = function(query) {
        Doctors.query(query, function(doctors) {
            $scope.doctors = doctors;
        });
    };

    $scope.findOne = function() {
        Doctors.get({
            doctorId: $routeParams.doctorId
        }, function(doctor) {
            $scope.doctor = doctor;
        });
    };
}]);