
(function () {
    'use strict';

    angular.module('app')
        .directive('listingCard', function(){
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'js/app/listingcard/listingCard-tempalte.html',
            }
    })

   

}());