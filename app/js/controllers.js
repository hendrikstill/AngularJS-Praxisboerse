'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http',
function($scope,$http){
  $http.get('mock/offers.json').success(function (data){
      var $offers = data.offers;
      $scope.jobs = data.offers;
  });
}]);
