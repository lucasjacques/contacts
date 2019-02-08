let myApp = angular.module('myApp', []); 

(function(app){
  "use strict";
  app.controller('AppCtrl', function($scope, $http){
	$http.get('/contactList').then(function (response) {
		console.log('I got the data I requested');
		$scope.contactList = response.data;
	},
	function (error) {
		console.log('An error has been found', error);
	});
  });
})(myApp);