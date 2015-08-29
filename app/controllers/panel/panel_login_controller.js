'use strict';

angular.module('Handy.controllers.panel.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/panel/login', {
            templateUrl: 'templates/panel/login.html',
            controller: 'PanelLoginController'
        });
    }])

    .controller('PanelLoginController', ['$scope', function($scope) {


        $scope.onSubmitButtonClicked = function(){
            alert("Aww, you!");
        }
    }]);