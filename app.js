angular.module("bookApp", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
            .state('home', {
                url: '/',
                templateUrl: './htmls/home.html',
                controller: 'homeCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: './htmls/profile.html',
                controller: 'profileCtrl'
            })

})