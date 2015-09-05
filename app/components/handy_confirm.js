'use strict';

// Declare app level module which depends on views, and components
angular.module('Handy.components.confirm', [
]).
    factory('HandyConfirm', ['$mdDialog', function($mdDialog) {

        return function(on_yes, config){

            var confirm = $mdDialog.confirm()
                .title(config.title?config.title:'Are You sure?')
                .ariaLabel(config.title?config.title:'Are You sure?')
                .ok(config.yes_button?config.yes_button:'Yes')
                .cancel(config.no_button?config.no_button:'No');
            $mdDialog.show(confirm).then(function() {
                on_yes?on_yes():undefined;
            }, function() {
                config.on_no?config.on_no():undefined;
            });

        }

    }]);
