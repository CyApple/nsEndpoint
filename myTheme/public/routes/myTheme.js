(function() {
    'use strict';

    function MyTheme($stateProvider) {
        $stateProvider.state('myTheme example page', {
            url: '/myTheme/example',
            templateUrl: 'myTheme/views/index.html'
        }).state('myTheme circles example', {
            url: '/myTheme/example/:circle',
            templateUrl: 'myTheme/views/example.html'
        });
    }

    angular
        .module('mean.myTheme')
        .config(MyTheme);

    MyTheme.$inject = ['$stateProvider'];

})();
