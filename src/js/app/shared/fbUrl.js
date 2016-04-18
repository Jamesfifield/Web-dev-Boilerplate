(function () {
    'use strict';

    angular.module('app')
        .constant('firebaseUrl', 'https://resplendent-fire-2148.firebaseio.com/')
        .service('rootRef',['firebaseUrl', Firebase]);

   

}());