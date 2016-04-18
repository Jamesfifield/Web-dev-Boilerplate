(function () {
    'use strict';

    angular.module('app')
        .controller("homeCtrl", function($scope,$state){
            this.page = "Home";
        console.log($state);
        $scope.test="HomeCtrl";
    });
   

}());

