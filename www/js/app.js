'use strict';

/* App Module */
var mediaApp = angular.module('mediaApp', ['ionic','ngResource','wu.masonry'])

mediaApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('menu', {
			url: "/menu",
			abstract: true,
			templateUrl: "menu.html"

		})
		
		.state('menu.home', {
			url: "/home",
			views: {
				'menuContent' :{
					templateUrl: "views/home.html",
					controller: "HomeCtrl"
				}
			}
		})
		
		.state('menu.beacon', {
			url: "/beacon",
			views: {
				'menuContent': {
					templateUrl: "views/beacon.html",
					controller: "BeaconCtrl"
				}
			}
		})
		
		.state('menu.camera', {
			url: "/camera",
			views: {
				'menuContent': {
					templateUrl: "views/camera.html",
					controller: "CameraCtrl"
				}
			}
		})
		
		.state('menu.calendar', {
			url: "/calendar",
			views: {
				'menuContent': {
					templateUrl: "views/calendar.html",
					controller: "CalendarCtrl"
				}
			}
		})
		
		.state('menu.geolocation', {
			url: "/geolocation",
			views: {
				'menuContent': {
					templateUrl: "views/geolocation.html",
					controller: "GeolocationCtrl"
				}
			}
		})
		
		.state('menu.compass', {
			url: "/compass",
			views: {
				'menuContent': {
					templateUrl: "views/compass.html",
					controller: "CompassCtrl"
				}
			}
		})
		
		.state('menu.search', {
			url: "/search",
			views: {
				'menuContent' :{
					templateUrl: "views/search.html",
					controller: "SearchCtrl"
				}
			}
		})

		.state('menu.settings', {
			url: "/settings",
			views: {
				'menuContent' :{
					templateUrl: "views/settings.html",
					controller: "SettingsCtrl"
				}
			}
		})
		
		.state('menu.about', {
			url: "/about",
			views: {
				'menuContent' :{
					templateUrl: "views/about.html",
					controller: "AboutCtrl"
				}
			}
		});

	$urlRouterProvider.otherwise("/menu/home");
})