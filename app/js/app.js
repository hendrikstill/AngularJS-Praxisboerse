var praxisboerseApp = angular.module("praxisboerseApp",[
  'ngRoute',
  'praxisboerseControllers'
  //'praxisboerseFilters',
  //'praxisboerseService'
]);

praxisboerseApp.config(['$routeProvider','$httpProvider',
  function($routeProvider,$httpProvider){
    $routeProvider.when('/jobs',{
      templateUrl:"partials/job-list.html",
      controller:"JobListCtrl"
    });
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);
