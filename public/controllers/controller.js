let myApp = angular.module('myApp', []); 

(function(app){
	"use strict";
	app.controller('AppCtrl',
	function($scope, $http){
		let refresh = function () {
			$http.get('/contactList').then(
			function (response) {
				console.log('I got the data I requested');
				$scope.contactList = response.data;
				$scope.contact = {};
			}).catch(
			function (error) {
				console.log('An error has been found', error);
			});
		};
		refresh();
		$scope.addContact = function () {
			console.log($scope.contact);
			$http.post('/contactList', $scope.contact).then(
			function (response) {
				console.log(response);
				refresh();
			});
		}
	});
})(myApp);
