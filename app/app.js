'use strict';

// Declare app level module which depends on views, and components
angular.module('Handy', [
  'ngRoute',
  'ngMaterial',
  'Handy.controllers.panel.login',
  'Handy.controllers.files.list'
]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
}).
    config(['$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/panel/login'});
    }]);
