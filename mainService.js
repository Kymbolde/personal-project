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

	this.setFav = function(values) {
		return $http({
			method: 'POST',
			url: '/api/favorites/',
			data: values
		})
	}

	this.changeFav = function(values) {
		return $http({
			method: 'PUT',
			url: '/api/favorites/' + values.id,
			data: values
		})
	}

	this.deleteFav = function(values) {
		return $http({
			method: 'DELETE',
			url: '/api/favorites/' + values.id,
			data: values
		})
	}

})