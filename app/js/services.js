'use strict';

var jobServices = angular.module('jobServices',['ngResource']);

jobServices.factory('Job', ['$resource',
  function($resource){

    return $resource('https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offers/internship/0/-1', {}, {
      query: {
        method:'GET',
        withCredentials:true,
        transformResponse: function(data, headersGetter){
          var $offers = angular.fromJson(data).offers;
          return $offers;
        },
        isArray:true}
    });
  }]
);
