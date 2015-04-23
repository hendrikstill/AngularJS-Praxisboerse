'use strict';

var jobServices = angular.module('jobServices',['ngResource']);
var countryServices = angular.module('countryServices',['ngResource']);

countryServices.factory('Country',['$resource',
  function($resource){
    return $resource('https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/countries/all',
    {
        query: {
          method: 'GET',
          withCredentials:true,
          isArray:true
        }
    });
  }]);

jobServices.factory('Job', ['$resource',
  function($resource){

    return $resource('https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offers/:typ/:key/:start/:count',
    {typ:'internship',key:'',start:'0',count:'-1'},
    {
      query: {
        method:'GET',
        withCredentials:true,
        transformResponse: function(data, headersGetter){
          var apiResponse = angular.fromJson(data);
          angular.forEach(apiResponse.offers,function(offer,key){
            var companies = apiResponse.companies;
            var offerTypes = apiResponse.offerTypes;
            var countries = apiResponse.countries;

            offer.companyName=companies[offer.companyId].companyName;
            offer.type=offerTypes[offer.typeId].name;
            offer.country=countries[offer.countryId].name;
            offer.companyLocation=companies[offer.companyId].city;
          });
          return apiResponse;
        }}
    });
  }]
);

jobServices.factory('Company', ['$resource',
  function($resource){

    return $resource('https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/company/:id/',
    {id: '191'},
    {
      query: {
        method:'GET',
        withCredentials:true,
      }
    });
  }]
);
