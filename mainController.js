angular.module('bookApp').controller('mainCtrl', function($scope, mainServ, $timeout) {

	$scope.getFavorites = function() {
		mainServ.getFavorites().then(function(res) {
			console.log("favorites", res.data);
			$scope.favorites = res.data
			$scope.shelfData = res.data
		})
	}

	$scope.userSubmit = function(keyword, index) {
		mainServ.setUser(keyword, index).then(function(res) {
			console.log("shelf/user data", res.data);
			$scope.shelfData = res.data.shelfData
			$scope.userData = res.data.userData

			firstData = [
		{
			label: $scope.userData[1].shelfName,
			value: $scope.userData[1].shelfBooks
		},{
			label: "reading",
			value: $scope.userData[2].shelfBooks
		},{
			label: $scope.userData[3].shelfName,
			value: $scope.userData[3].shelfBooks
		}, {
			label: 'favorites',
			value: $scope.favorites.length
		}
	];
		})
	}

	$scope.searchSubmit = function(keyword) {
		mainServ.setSearch(keyword).then(function(res) {
			console.log("search data", res);
			$scope.searchData = res.data
		})
	}

	$scope.favSubmit = function(values) {
		console.log("favSubmit values", values);
		mainServ.setFav($scope.shelfData[values]).then(function(res) {
			console.log(res);

			firstData = [
		{
			label: $scope.userData[1].shelfName,
			value: $scope.userData[1].shelfBooks
		},{
			label: "reading",
			value: $scope.userData[2].shelfBooks
		},{
			label: $scope.userData[3].shelfName,
			value: $scope.userData[3].shelfBooks
		}, {
			label: 'favorites',
			value: firstData[3].value + 1
		}
	];
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

	var firstData = []

	$scope.getData = function(bool) {

		$timeout(function() {
        	$scope.data = firstData;
    	}, 3000);
		// if(bool) {
		// 	$scope.data = firstData;
		// } else {
		// 	$scope.data = firstData;
		// }

	}

})










