angular.
    module('Handy.components.model_utils', []).
    factory('ModelUtils', [
        '$resource', '$http', 'Config',
        function($resource, $http, Config) {


            return {
                createDefaultEndpoints: function(target, cde_config){
                    var url = cde_config.url;

                    target.list = function(config){
                        return $resource(Config.backend + url + '/', {}, {'query':  {method:'GET', isArray:true}}).query({},{}, config&&config.success?config.success:undefined, config&&config.failure?config.failure:undefined);
                    };

                    target.create = function(config){
                        target.data =  $http({
                            method: 'POST',
                            url: Config.backend + url ,
                            data : config.data
                        }).success(function(data, status_code){
                            target.id = data.id;
                            target.data = data;
                            config.success(data, status_code);
                        }).error(config.error);
                        return target;
                    };

                    target.get = function(config){
                        var id = config.id?config.id:target.id;
                        target.data = $resource(Config.backend + url + '/' + id + '/', {},  {'query':  {method:'GET', isArray:false}}).query({},{}, config.success, config.error);
                        return target.data;
                    };

                    target.update = function(config){
                        var id = config.id?config.id:target.id;
                        var data = config.data?config.data:target.data;
                        return $http({
                            method: 'PATCH',
                            url: Config.backend + url + '/' + id + '/',
                            data : data
                        }).success(config.success).error(config.error);
                    };

                    target.delete = function(config){
                        var id = config.id?config.id:target.id;
                        return $http({
                            method: 'DELETE',
                            url: Config.backend + url + '/' +  id + '/'
                        }).success(config.success).error(config.error);
                    };
                }
            };

        }]);