'use strict';

angular.module('Handy.controllers.panel.register', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/panel/register', {
            templateUrl: 'templates/panel/register.html',
            controller: 'PanelRegisterController'
        });
    }])

    .controller('PanelRegisterController', ['$scope', function($scope) {


        $scope.onSubmitButtonClicked = function(){
            alert("Aww, you!");
        }
    }]);