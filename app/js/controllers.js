'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http','Job',
function($scope,$http,Job){

  Job.query({typ:"workingstudent",start:"2",count:"2"},function(offers){
    $scope.jobs = offers.offers;
  });

}]);
