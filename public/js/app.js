/**
 * Agorophinstify Main module.
 */

(function() {

  var module = angular.module('AgoroApp', [
    'ngRoute',
    'AgoroApp.controllers',
    'AgoroApp.directives',
    'AgoroApp.services',
    'leaflet-directive',
    'angular-loading-bar'
    ]);

  module.config([
    '$routeProvider',
    'cfpLoadingBarProvider',
  function($routeProvider, cfpLoadingBarProvider) {

    cfpLoadingBarProvider.includeBar = false;

    $routeProvider.
    // Map view homepage
    when('/', {
      templateUrl: '../views/partials/map.html',
      controller: 'MapController',
      controllerAs: 'map'
    }).
    // Instify view by event
    when('/event/:eventId', {
      templateUrl: '../views/partials/instify.html',
      controller: 'InstifyController',
      controllerAs: 'instify'
    }).
    // Instify view by venue
    when('/venue/:venueId', {
      templateUrl: '../views/partials/instify.html',
      controller: 'InstifyController',
      controllerAs: 'instify'
    });
  }]);

})();