'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope',
function($scope){
  $scope.jobs = [
  {
    'companyName': 'Capitol AG',
    'type': 'Praktikant',
    'shortDescription': 'Akten schreddern',
    'country': 'Schland',
    'zip': '123123',
    'usageSite': 'Theran',
    'validDate': '2015.12.24',
    'onNotepad': true
  },
  {
    'companyName': 'Capitol AG',
    'type': 'Praktikant',
    'shortDescription': 'Akten schreddern',
    'country': 'Schland',
    'zip': '123123',
    'usageSite': 'Theran',
    'validDate': '2015.12.24',
    'onNotepad': true
  },
  {
    'companyName': 'Capitol AG',
    'type': 'Praktikant',
    'shortDescription': 'Akten schreddern',
    'country': 'Schland',
    'zip': '123123',
    'usageSite': 'Theran',
    'validDate': '2015.12.24',
    'onNotepad': true
  }
  ];
}]);
