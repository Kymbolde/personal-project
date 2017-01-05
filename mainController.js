angular.module('bookApp').controller('mainCtrl', function($scope, mainServ, $window) {

	$scope.userSubmit = function(keyword) {
		mainServ.setUser(keyword).then(function(res) {
			console.log(res);
		})
	}

	$scope.searchSubmit = function(keyword) {
		mainServ.setSearch(keyword).then(function(res) {
			console.log(res.data);
			$scope.bookData = res.data
		})
	}

	$scope.favSubmit = function(values) {
		console.log(values);
		mainServ.setFav($scope.bookData[values]).then(function(res) {
			console.log(res);
		})
	}

	$scope.changeFav = function(values) {
		mainServ.changeFav(values).then(function(res) {
			console.log(res);
		})
	}

	$scope.deleteFav = function(values) {
		mainServ.deleteFav(values).then(function(res) {
			console.log(res);
		})
	}	



})