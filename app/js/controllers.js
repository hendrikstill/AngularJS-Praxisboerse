'use strict';

var praxisboerseControlellers = angular.module("praxisboerseControllers",[]);

praxisboerseControlellers.controller("JobListCtrl",['$scope','$http', 'Job','Country','Type','NotepadOffer',
function($scope,$http,Job,Country,Type,NotepadOffer){
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

    // mobile detection
    if (userAgent.indexOf("mobile") !== -1 || userAgent.indexOf("Android") !== -1|| userAgent.indexOf("iPhone") !== -1
        || userAgent.indexOf("iPad") !== -1 || userAgent.indexOf("Windows Phone") !== -1) {
          count = 10;
          $scope.isMobile = true;
    }

    Job.query({typ:$scope.typeQuery, key:$scope.textQuery, count:count, start: this.currentPage},function(offers){
      $scope.totalHits = offers.totalHits;
      $scope.jobs = offers.offers;
    });
  };

  // add/remove job from notepdad
  $scope.changeNotepadStatus = function(job){
    if (!job.onNotepad) {
      NotepadOffer.save(job.id, function(notepad){
        // update button text
        job.onNotepad = true;
      });
    } else {
      // server request to delete from notepad
            var req = {
        method: 'DELETE',
        url: 'https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/notepad/offer/'+job.id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {  } // Angular.js fix to send correct Content-Type to HSKA server
      };

      $http(req).success(function(){
        job.onNotepad = false;
      });
    }
    
  };

}]);

praxisboerseControlellers.controller("CompanyDetailsCtrl",['$scope','$http','$routeParams','Company',
  function($scope,$http,$routeParams,Company){

    Company.query({id: $routeParams.id}, function(company){
      $scope.company = company;
    });

}]);

praxisboerseControlellers.controller("NotepadCtrl", ['$scope', '$http', '$routeParams', 'Notepad',
  function($scope, $http, $routeParams, Notepad, NotepadOffer){
    Notepad.query({}, function(notepad){
      $scope.jobs = notepad.offers;
    });
    
    $scope.changeNotepadStatus = function(job){
      if (!job.onNotepad) {
        NotepadOffer.save(job.id, function(notepad){
          //Update element
          job.onNotepad = true;
        });
      } else {
      // server request to delte from notepad
        var req = {
          method: 'DELETE',
          url: 'https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/notepad/offer/'+job.id,
          headers: {
            'Content-Type': 'application/json'
          },
          data: {  } // Hack to send the correct Content-Type
        };

        $http(req).success(function(){
          job.onNotepad = false;
        });
      }
    
  };
}]);
