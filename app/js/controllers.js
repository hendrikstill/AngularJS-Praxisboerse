'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http','Job','Country','Type',
function($scope,$http,Job,Country,Type){

  Type.query({}, function(types) {
    $scope.types = types;
  });

  Country.query({},function(countries){
    $scope.countries = countries;
  });

  Job.query({typ:"workingstudent",start:"2",count:"2"},function(offers){
    $scope.jobs = offers.offers;
  });

  $scope.change = function(){
    Job.query({typ:$scope.typeQuery, key:$scope.textQuery},function(offers){
      $scope.jobs = offers.offers;
    });
  };

}]);

praxisboerseControlellers.controller("CompanyDetailsCtrl",['$scope','$http','$routeParams','Company',
  function($scope,$http,$routeParams,Company){

    Company.query({id: $routeParams.id}, function(company){
      $scope.company = company;
    });

}]);
