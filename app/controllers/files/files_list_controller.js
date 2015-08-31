'use strict';

angular.module('Handy.controllers.files.list', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/files/list', {
            templateUrl: 'templates/files/list.html',
            controller: 'FilesListController'
        });
    }])

    .controller('FilesListController', ['$scope', function($scope) {
        $scope.display_modes = [
            {
                'name': 'list',
                'label': 'List',
                'icon': 'list',
                'template': 'templates/files/display_files_as_list.html'
            },
            {
                'name': 'gallery',
                'label': 'Gallery',
                'icon': 'image',
                'template': 'templates/files/display_files_as_gallery.html'
            }
        ];

        $scope.display_as = $scope.display_modes[0];

        $scope.files = [
            {
                name: "Ziomek.jpg",
                size: "34.2KB",
                modified: "12-03-2012",
                url: "img/1.jpg"
            },
            {
                name: "Rosa.jpg",
                size: "14.2KB",
                modified: "14-12-2014",
                url: "img/2.jpg"
            },
            {
                name: "Doge.png",
                size: "11.2KB",
                modified: "14-12-2014",
                url: "img/3.png"
            }
        ];

        $scope.openMenu = function($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };

        $scope.setDisplayType = function(type){
            $scope.display_as = type;
        }

    }]) .controller('SingleFileController', ['$scope', function($scope) {

        $scope.file = {};

        $scope.initFor = function(file){
            $scope.file = file;
        }

    }]);