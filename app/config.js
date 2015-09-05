'use strict';

angular.module('Handy.config', [
]).
    factory('Config', [function() {

        return {
            backend: 'http://www.selandir.pl:3000'
        }

    }]);
