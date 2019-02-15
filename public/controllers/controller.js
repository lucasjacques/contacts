let myApp = angular.module('myApp', []); 

(function(app){
	"use strict";
	app.controller('AppCtrl',
	function($scope, $http){
		let refresh = function () {
			$http.get('/contactList').then(
			function (response) {
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
				refresh();
			});
		}

		$scope.remove = function (id) {
			$http.delete('/contactList/' + id).then(
				function (response) {
					refresh();
				});
		}
		$scope.edit = function (id) {
			console.log(id);
			$http.get('/contactList/' + id).then(
				function (response) {
					$scope.contact = response;
					// refresh();
				});
		}
	});
})(myApp);
