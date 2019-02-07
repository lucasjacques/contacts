let myApp = angular.module('myApp', []); 

(function(app){
  "use strict";
  app.controller('AppCtrl', function($scope, $http){
    console.log('Hello People');
  });
})(myApp);