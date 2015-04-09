'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','Job',
function($scope, Job){
  $scope.jobs = [
  {'name': 'Nexus S',
  'snippet': 'Fast just got faster with Nexus S.',
  'age': 1},
  {'name': 'Motorola XOOM™ with Wi-Fi',
  'snippet': 'The Next, Next Generation tablet.',
  'age': 2},
  {'name': 'MOTOROLA XOOM™',
  'snippet': 'The Next, Next Generation tablet.',
  'age': 3}
  ];
}]);
