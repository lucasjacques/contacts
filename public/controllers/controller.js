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
			$http.post('/contactList', $scope.contact).then(
			function (response) {
				refresh();
			}).catch(
			function (error) {
				console.log('An error has been found', error);
			});
		}

		$scope.remove = function (id) {
			$http.delete('/contactList/' + id).then(
				function (response) {
					refresh();
				}).catch(
				function (error) {
					console.log('An error has been found', error);
				});
		}
		$scope.edit = function (id) {
			$http.get('/contactList/' + id).then(
				function (response) {
					$scope.contact = response.data;
				}).catch(
				function (error) {
					console.log('An error has been found', error);
				});
		}
		$scope.update = function () {
			$http.put('/contactList/' + $scope.contact._id, $scope.contact).then( 
				function (response) {
					refresh();
				}
			).catch(
			function (error) {
				console.log('An error has been found', error);
			});
		}
		$scope.deselect = function () {
			$scope.contact = {};
		}
	});
})(myApp);
