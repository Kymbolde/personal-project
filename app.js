angular.module("bookApp", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
            .state('home', {
                url: '/',
                templateUrl: './htmls/home.html',
                controller: 'homeCtrl'
            })
            .state('search', {
                url: '/search',
                templateUrl: './htmls/search.html',
                controller: 'searchCtrl'
            })
            .state('results', {
                url: '/results',
                templateUrl: './htmls/results.html',
                controller: 'resultsCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: './htmls/profile.html',
                controller: 'profileCtrl'
            })

})