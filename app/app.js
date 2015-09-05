'use strict';

// Declare app level module which depends on views, and components
angular.module('Handy', [
    'ngRoute',
    'ngMaterial',
    'ngResource',
    'Handy.config',
    'Handy.controllers.panel.login',
    'Handy.controllers.files.list',
    'Handy.models.file',
    'Handy.components.confirm',
    'Handy.components.alert',
    'Handy.components.model_utils',
    'Handy.components.local_settings'
]).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
}).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/panel/login'});
    }]).run(function($http, LocalSettings, $location){

        if(LocalSettings.auth_token !== null){
            $http.defaults.headers.common.Authorization = LocalSettings.auth_token;
        }else{
            $location.url('/panel/login');
        }

    });
