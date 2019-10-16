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
  .when('/new-order', {
    templateUrl: 'views/new-order.html',
    controller: 'newOrderCtrl',
  })
  .when('/products', {
    templateUrl: 'views/products.html',
    controller: 'productsCtrl',
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
      date: '01/03/2017',
      time: '08:20',
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
  
  //http://embed.plnkr.co/eheFSh/
  
  $scope.viewby = 5;
  $scope.totalItems = $scope.orders.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.setItemsPerPage = function(num) {
    $scope.itemsPerPage = num;
    // $scope.currentPage = 1; //reset to first page
  }

  // column to sort
 $scope.column = 'id';
 
 // sort ordering (Ascending or Descending). Set true for desending
 $scope.reverse = true;

 // called on header click
  $scope.sortColumn = function(col){
    $scope.column = col;
    if($scope.reverse){
      $scope.reverse = false;
      $scope.reverseclass = 'sort-desc';
    } else {
      $scope.reverse = true;
      $scope.reverseclass = 'sort-asc';
    }
  };
 
 // remove and change class
  $scope.sortClass = function(col){
    if($scope.column == col ){
      if($scope.reverse) {
        return 'sort-asc'; 
      } else {
        return 'sort-desc';
      }
    } else {
      return '';
    }
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


/*-----------------------------------------------------------------------------------*/
/* ORDERS PAGE CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('newOrderCtrl', function($scope) {
  $scope.parent.addClass = 'new-order';
  $scope.title = 'Add a new order';
});


/*-----------------------------------------------------------------------------------*/
/* PRODUCTS PAGE CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('productsCtrl', function($scope) {
  $scope.parent.addClass = 'products';
  $scope.title = 'Products';
});


/*-----------------------------------------------------------------------------------*/
/* PRODUCTS TABLE CONTROLLER */
/*-----------------------------------------------------------------------------------*/

app.controller('productsTableCtrl', function($scope, $uibModal) {

  $scope.products = [
    {
      sku: '5',
      name: 'Goldwell Kerasilk Ultra Rich Care Shampoo',
      price: '7.00',
      size: '250ml',
      stock: '5',
      categories: 'shampoo'
    }, {
      sku: '5',
      name: 'Goldwell Kerasilk Ultra Rich Care Shampoo',
      price: '7.00',
      size: '250ml',
      stock: '5',
      categories: 'shampoo'
    }, {
      sku: '5',
      name: 'Goldwell Kerasilk Ultra Rich Care Shampoo',
      price: '7.00',
      size: '250ml',
      stock: '5',
      categories: 'shampoo'
    }, {
      sku: '5',
      name: 'Goldwell Kerasilk Ultra Rich Care Shampoo',
      price: '7.00',
      size: '250ml',
      stock: '5',
      categories: 'shampoo'
    }

  ];
    
  $scope.viewby = 5;
  $scope.totalItems = $scope.products.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.setItemsPerPage = function(num) {
    $scope.itemsPerPage = num;
    // $scope.currentPage = 1; //reset to first page
  }

  // column to sort
 $scope.column = 'id';
 
 // sort ordering (Ascending or Descending). Set true for desending
 $scope.reverse = true;

 // called on header click
  $scope.sortColumn = function(col){
    $scope.column = col;
    if($scope.reverse){
      $scope.reverse = false;
      $scope.reverseclass = 'sort-desc';
    } else {
      $scope.reverse = true;
      $scope.reverseclass = 'sort-asc';
    }
  };
 
 // remove and change class
  $scope.sortClass = function(col){
    if($scope.column == col ){
      if($scope.reverse) {
        return 'sort-asc'; 
      } else {
        return 'sort-desc';
      }
    } else {
      return '';
    }
  } 
  
});
