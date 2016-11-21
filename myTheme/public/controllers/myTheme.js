(function() {
    'use strict';

    /* jshint -W098 */

    function MyThemeController($scope, Global, MyTheme, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'myTheme'
        };

        $scope.checkCircle = function() {
            MyTheme.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.myTheme')
        .controller('MyThemeController', MyThemeController);

    MyThemeController.$inject = ['$scope', 'Global', 'MyTheme', '$stateParams'];

})();
