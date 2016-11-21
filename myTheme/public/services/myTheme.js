(function() {
    'use strict';

    function MyTheme($http, $q) {
        return {
            name: 'myTheme',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/myTheme/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.myTheme')
        .factory('MyTheme', MyTheme);

    MyTheme.$inject = ['$http', '$q'];

})();
