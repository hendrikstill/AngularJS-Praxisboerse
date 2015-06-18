var praxisboerseApp = angular.module("praxisboerseApp",[
  'ngRoute',
  'praxisboerseControllers',
  'jobServices','countryServices','notepadServices','base64','ui.bootstrap'
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
    })
    .when('/notepad',{
      templateUrl:"partials/notepad.html",
      controller:"NotepadCtrl"
    });
    
    // Authentication headers
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.delete = {
      'Content-Type': 'application/json'
    };
   }
]);
