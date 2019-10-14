var app = angular.module('app',['ngRoute', 'ngAnimate', 'ui.bootstrap']);

/*-----------------------------------------------------------------------------------*/
/* CONFIGURE ROUTES */
/*-----------------------------------------------------------------------------------*/

app.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'views/login.html',
    controller: 'loginCtrl',
  })
  .when('/dashboard', {
    templateUrl: 'views/dashboard.html',
    controller: 'dashCtrl',
  })
  .otherwise({
    templateUrl: 'views/404.html',
    controller: 'error404'
  });

  $locationProvider.html5Mode(true);

});

app.config(['$locationProvider', function($location) {
  $location.hashPrefix('/');
}]);


/*-----------------------------------------------------------------------------------*/
/* MAIN CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('mainCtrl', function($scope) {
  $scope.parent = {};
});


/*-----------------------------------------------------------------------------------*/
/* LOGIN CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('loginCtrl', function($scope) {
  $scope.parent.addClass = 'login';
});


/*-----------------------------------------------------------------------------------*/
/* DASHBOARD CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('dashCtrl', function($scope) {
  $scope.parent.addClass = 'dashboard';
  $scope.title = 'Dashboard';
});