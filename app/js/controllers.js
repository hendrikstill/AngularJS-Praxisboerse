'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http','Job','Country',
function($scope,$http,Job,Country){

  Country.query({},function(countries){
    $scope.countries = countries;
  });

  Job.query({typ:"workingstudent",start:"2",count:"2"},function(offers){
    $scope.jobs = offers.offers;
  });

}]);
