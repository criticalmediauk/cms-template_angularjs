var app = angular.module('app',['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.select', 'ngSanitize']);

/*-----------------------------------------------------------------------------------*/
/* CONFIGURE ROUTES */
/*-----------------------------------------------------------------------------------*/

app.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'views/dashboard.html',
    controller: 'dashCtrl',
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'loginCtrl',
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


app.controller('ordersCtrl', function($scope, $uibModal) {

  $scope.newOrderModal  = function(){
    $uibModal.open({
      templateUrl : '/modals/new-order-modal.html',
      controller  : 'newOrderCtrl'
    });
  }
  
});

app.controller('newOrderCtrl', function ($scope, $uibModalInstance ){
  
  $scope.ok = function(){ 
    $uibModalInstance.close()
  }
  
  $scope.cancel = function(){  
    $uibModalInstance.close()
  }

})
