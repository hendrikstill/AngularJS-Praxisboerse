'use strict';

var jobServices = angular.module('jobServices',['ngResource']);

jobServices.factory('Job', ['$resource',
  function($resource){
    return $resource();
  }]
);
