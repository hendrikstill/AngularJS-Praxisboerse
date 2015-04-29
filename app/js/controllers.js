'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http', 'Job','Country','Type',
function($scope,$http,Job,Country,Type){
  $scope.currentPage = 0;

  Type.query({}, function(types) {
    $scope.types = types;
  });
  Country.query({},function(countries){
    $scope.countries = countries;
  });

  $scope.change = function(){
    var count = -1;
    $scope.isMobile = false;
    var userAgent = navigator.userAgent;

    if (userAgent.indexOf("mobile") !== -1 || userAgent.indexOf("Android") !== -1|| userAgent.indexOf("iPhone") !== -1
        || userAgent.indexOf("iPad") !== -1 || userAgent.indexOf("Windows Phone") !== -1) {
          count = 10;
          $scope.isMobile = true;
    }

    Job.query({typ:$scope.typeQuery, key:$scope.textQuery, count:count, start: $scope.currentPage},function(offers){
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
