angular.module('bookApp').service('mainServ', function($http) {
	
	this.setUser = function(keyword) {
		return $http({
			method: 'GET',
			url: '/api/showUser/' + keyword
		})
	}

	this.setSearch = function(keyword) {
		return $http({
			method: 'GET',
			url: '/api/search/' + keyword
		})
	}

})