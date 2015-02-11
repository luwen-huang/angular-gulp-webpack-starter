
// you need these two lines so that webpack can fetch the chunked bundles from the proper path
// or else it'll try to get them as a root relative path
if (location.protocol === 'https:') {
	__webpack_public_path__ = 'https://' + window.location.host + '/';
} else {
	__webpack_public_path__ = 'http://' + window.location.host + '/';
}


require('./common/components');
require('./main');
// nope, we don't bundle this module in...we want to lazy load it!
// require('modules/captain-list'); 

var starTrekApp = angular.module("starTrekApp", ['ui.router', 'oc.lazyLoad', 
	'starTrekApp.common.components',
	'starTrekApp.main'
	// also notice we don't declare the captain-list module here
])

.config( ['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
	
	$urlRouterProvider.rule(function ($injector, $location) {
                var path = $location.url();
                // check to see if the path already has a slash where it should be
                if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) return;
                if (path.indexOf('?') > -1) {
                        return path.replace('?', '/?');
                }
                return path + '/';
        });  

	// normal loading...this page is wrapped into the main bundle as usual
	$stateProvider
	.state('main', { 
		url: '/', 
		templateUrl: 'main.html', 
		controller: 'MainController'
	}) 

	// we want to lazy load this 'page', so it's a bit more involved...
	// webpack will detect the presence of these two require.ensure statements
	// and create two more bundle chunks

	.state('captain-list', {
		url: '/captains/',
		templateProvider: ['$q', function($q) {
			var deferred = $q.defer();

			require.ensure([], function() {
				var template = require('html!./captain-list/captainList.html');
				deferred.resolve(template);
			});
			return deferred.promise;
		}],
		controller: 'CaptainListController',
		resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
			var deferred = $q.defer();

			require.ensure([], function() {
				var mod = require('./captain-list');
				$ocLazyLoad.load({
					name: 'starTrekApp.captainList',
				});
				deferred.resolve(mod.controller);
			});

			return deferred.promise;
		}]
	})

	$locationProvider.html5Mode(true);
}]);
