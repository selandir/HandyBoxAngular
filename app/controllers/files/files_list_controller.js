'use strict';

angular.module('Handy.controllers.files.list', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/files/list', {
            templateUrl: 'templates/files/list.html',
            controller: 'FilesListController'
        });
    }])

    .controller('FilesListController', ['$scope', function($scope) {
        $scope.files = [
            {
                name: "Ziomek.jpg",
                size: "34.2KB",
                modified: "12-03-2012",
                url: "http://i.ytimg.com/vi/s2fiFKZf7rk/hqdefault.jpg"
            },
            {
                name: "Rosa.jpg",
                size: "14.2KB",
                modified: "14-12-2014",
                url: "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
            },
            {
                name: "Doge.png",
                size: "11.2KB",
                modified: "14-12-2014",
                url: "http://i.stack.imgur.com/aP2dv.gif"
            }


        ];
    }]) .controller('SingleFileController', ['$scope', function($scope) {

        $scope.file = {};

        $scope.initFor = function(file){
            $scope.file = file;
        }

    }]);