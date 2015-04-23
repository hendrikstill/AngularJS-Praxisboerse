var praxisboerseApp = angular.module("praxisboerseApp",[
  'ngRoute',
  'praxisboerseControllers',
  'jobServices','base64'
]);

praxisboerseApp.config(['$routeProvider','$httpProvider',
  function($routeProvider,$httpProvider){
    $routeProvider.when('/jobs',{
      templateUrl:"partials/job-list.html",
      controller:"JobListCtrl"
    });
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
  }
]);
