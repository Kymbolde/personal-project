angular.module('bookApp').controller('mainCtrl', function($scope, mainServ) {

	$scope.userSubmit = function(keyword) {
		mainServ.setUser(keyword).then(function(res) {
			console.log(res);
		})
	}

	$scope.searchSubmit = function(keyword) {
		mainServ.setSearch(keyword).then(function(res) {
			console.log(res);
		})
	}

})