(function () {
    'use strict';

    angular.module('app')
        .factory('auth', function($firebaseAuth, rootRef){
            return $firebaseAuth(rootRef);

    });

   

}());