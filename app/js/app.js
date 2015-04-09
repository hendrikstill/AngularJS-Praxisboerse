var praxisboerseApp = angular.module("praxisboerseApp",[
  'ngRoute',
  'praxisboerseControllers'
  //'praxisboerseFilters',
  //'praxisboerseService'
]);

praxisboerseApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('jobs',{
      templateUrl:"partials/job-list.html",
      controller:"JobListCtrl"
    });
  }
]);
