'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http','Job',
function($scope,$http,Job){

  Job.query({},function(jobs){
    $scope.jobs = jobs;
  });
  
}]);
