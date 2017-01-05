angular.module('bookApp').controller('mainCtrl', function($scope, mainServ, $window) {

	$scope.userSubmit = function(keyword) {
		mainServ.setUser(keyword).then(function(res) {
			console.log(res.data.shelfData);
			$scope.shelfData = res.data.shelfData
			$scope.userData = res.data.userData
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
		mainServ.setFav($scope.shelfData[values]).then(function(res) {
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

	$scope.getData = function(bool) {
		if(bool) {
			$scope.data = firstData;
		} else {
			$scope.data = secondData;
		}

	}

	var firstData = [
		{
			label: 'read',
			value: 15
		},{
			label: 'reading',
			value: 34
		},{
			label: 'to read',
			value: 12
		}, {
			label: 'favorites',
			value: 52
		}
	];

	var secondData = [
		{
			label: 'read',
			value: 32
		},{
			label: 'reading',
			value: 21
		},{
			label: 'to read',
			value: 10
		}, {
			label: 'favorites',
			value: 2
		}
	];

})