var app = angular.module('app',['ngRoute', 'ngAnimate', 'ngSanitize', 'ngTouch', 'ui.bootstrap']);

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
  .when('/orders', {
    templateUrl: 'views/orders.html',
    controller: 'ordersCtrl',
  })
  .otherwise({
    templateUrl: 'views/404.html',
    controller: '404Ctrl'
  });

  $locationProvider.html5Mode(true);

});

app.config(['$locationProvider', function($location) {
  $location.hashPrefix('/');
}]);


/*-----------------------------------------------------------------------------------*/
/* MAIN CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('mainCtrl', function($scope, $location) {

  $scope.parent = {};

  $scope.currentRoute = function (path) {
    return $location.path() == path;
  };

  $scope.toggleNav = false;

  $scope.close = function(){
    $scope.toggleNav = false;
  }

});


// /*-----------------------------------------------------------------------------------*/
// /* NAV CONTROLLER */
// /*-----------------------------------------------------------------------------------*/

// app.controller('navCtrl',function($scope){
  
  
// });


/*-----------------------------------------------------------------------------------*/
/* 404 PAGE CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('404Ctrl', function($scope) {
  $scope.parent.addClass = 'error404';
  $scope.title = '404';
});


/*-----------------------------------------------------------------------------------*/
/* LOGIN PAGE CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('loginCtrl', function($scope) {
  $scope.parent.addClass = 'login';
});


/*-----------------------------------------------------------------------------------*/
/* DASHBOARD PAGE CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('dashCtrl', function($scope) {
  $scope.parent.addClass = 'dashboard';
  $scope.title = 'Dashboard';
});


/*-----------------------------------------------------------------------------------*/
/* ORDERS PAGE CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('ordersCtrl', function($scope) {
  $scope.parent.addClass = 'orders';
  $scope.title = 'Orders';
});


/*-----------------------------------------------------------------------------------*/
/* ORDERS TABLE CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('ordersTableCtrl', function($scope, $uibModal) {

  $scope.newOrderModal  = function(){

    $uibModal.open({
      templateUrl : '/modals/new-order-modal.html',
      controller  : 'newOrderCtrl'
    });

  }

  $scope.page = 1;

  $scope.orders = [
    {
      id: '2002',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'failed'
    }, {
      id: '2001',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }, {
      id: '2000',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }, {
      id: '1999',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }, {
      id: '1998',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }, {
      id: '1997',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }, {
      id: '1996',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }, {
      id: '1995',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }, {
      id: '1994',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }, {
      id: '1993',
      date: '02/03/2017',
      time: '13:50',
      name: 'Joe Bloggs',
      spend: '52.80',
      status: 'complete'
    }

  ];                        

	$scope.displayItems = $scope.orders.slice(0, 5);
	
	$scope.pageChanged = function() {
	  var startPos = ($scope.page - 1) * 5;
	  //$scope.displayItems = $scope.orders.slice(startPos, startPos + 3);
	  // console.log($scope.page);
	};
  
});

app.controller('newOrderCtrl', function ($scope, $uibModalInstance ){
  
  $scope.ok = function(){ 
    $uibModalInstance.close()
  }
  
  $scope.cancel = function(){  
    $uibModalInstance.close()
  }

})
