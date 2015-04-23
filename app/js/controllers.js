'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http','Job','Country','Type',
function($scope,$http,Job,Country,Type){
  $scope.currentPage = 0;
  
  Type.query({}, function(types) {
    $scope.types = types;
  });
  Country.query({},function(countries){
    $scope.countries = countries;
  });

  $scope.change = function(){
    Job.query({typ:$scope.typeQuery, key:$scope.textQuery, count:10, start: $scope.currentPage},function(offers){
      $scope.totalHits = offers.totalHits;
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
