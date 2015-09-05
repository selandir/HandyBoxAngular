'use strict';

angular.module('Handy.models.file', [
]).
    factory('File', ['$resource', 'ModelUtils', 'Config', function($resource, ModelUtils, Config) {

        ModelUtils.createDefaultEndpoints(this, '/file');

        return {
            get_root_folder: function(config){
                return $resource(Config.backend +'/api/folder', {}, {'query':  {method:'GET', isArray:true}}).query({},{}, config&&config.success?config.success:undefined, config&&config.failure?config.failure:undefined);
            }
        }

    }]);
