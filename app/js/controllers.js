'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http','Job',
function($scope,$http,Job){
  /*
  Job.query({},function(jobs){
    $scope.jobs = jobs;
  });
  */

$http.get('https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offers/internship/0/-1',{
    url:'https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offers/internship/0/-1',
    withCredentials: true,
    headers: {
      'x-requested-with':'XMLHttpRequest'
    }
}
);
}]);
