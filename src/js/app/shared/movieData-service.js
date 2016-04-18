(function () {
    'use strict';

    angular.module('app')
        .service('moveData', function($q, $http){
            var baseUrl = "http://www.omdbapi.com/?";      
            
            return {
                getData: function(id){
                    var deffered = $q.defer();
                    $http.get(baseUrl + "s=" + encodeURIComponent(id))
                    .success(function(data){
                        deffered.resolve(data);
                    })
                    .error(function(){
                         deffered.reject();
                    });
                    
                    return deffered.promise(data);

                }
            };
        
    });

   

}());