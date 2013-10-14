//Doctors service used for doctors REST endpoint
angular.module('mean.doctors').factory("Doctors", ['$resource', function($resource) {
    return $resource('doctors/:doctorId', {
        doctorId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);