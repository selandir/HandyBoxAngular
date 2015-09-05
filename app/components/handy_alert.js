'use strict';

// Declare app level module which depends on views, and components
angular.module('Handy.components.alert', [
]).
    factory('HandyAlert', ['$mdToast', function($mdToast) {

        return {
            success: function(text){
                $mdToast.show(
                    $mdToast.simple()
                        .content(text)
                        .position("bottom right")
                        .hideDelay(3000)
                );
            },
            failure: function(text){
                $mdToast.show(
                    $mdToast.simple()
                        .content(text)
                        .position("bottom right")
                        .hideDelay(3000)
                );
            }
        }

    }]);
