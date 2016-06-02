var geomamaApp = angular.module('geomamaApp', []);

// ROUTING
// Defining '$routeProvider' for the module
geomamaApp.config(function($routeProvider) {
  $routeProvider

  // main route
  .when('/',
  {
    controller: 'RootController',
    templateUrl: 'views/RootControllerView.html'
  })

  // .when('/submit',
  // {
  //   controller: 'RootController',
  //   templateUrl: 'views/RootControllerView.html'
  // })

  // REDIRECTING THE ROUTER TO 'RootController'
  .otherwise({redirectTo: '/'});
});

// CONTROLLERS - Defining the CONTROLLERS we declared above
// RootController
