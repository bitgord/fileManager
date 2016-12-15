angular.module('app.home', ['ui.router', ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/index',
            templateUrl: 'components/home/home.html',
            controller: 'HomeCtrl'
        });
        // $urlRouterProvider.otherwise('/index');
    }])
    .controller('HomeCtrl', ['$scope', function($scope) {

        console.log('Im in the cust controller');

        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };

    }]);


