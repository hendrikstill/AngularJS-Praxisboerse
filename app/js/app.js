var praxisboerseApp = angular.module("praxisboerseApp",[
  'ngRoute',
  'praxisboerseControllers',
  'jobServices','countryServices','base64','ui.bootstrap'
]);

praxisboerseApp.config(['$routeProvider','$httpProvider',
  function($routeProvider,$httpProvider){
    $routeProvider.when('/jobs',{
      templateUrl:"partials/job-list.html",
      controller:"JobListCtrl"
    })
    .when('/company/:id',{
      templateUrl:"partials/company-details.html",
      controller:"CompanyDetailsCtrl"
    });
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
  }
]);
