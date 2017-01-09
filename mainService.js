angular.module('bookApp').service('mainServ', function($http) {
	
	this.getFavorites = function() {
		return $http({
			method: 'GET',
			url: '/api/favorites'
		})
	}

	this.setUser = function(keyword, index) {
		return $http({
			method: 'GET',
			url: '/api/showUser/' + keyword + '/' + index
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
			url: '/api/favorites/' + values.isbn,
			data: values
		})
	}

	this.deleteFav = function(values) {
		return $http({
			method: 'DELETE',
			url: '/api/favorites/' + values.isbn,
			data: values
		})
	}

})