(function () {
    'use strict';

angular.module('app')

.directive('sidebar',function(){
    return {
        restrict: 'E',
        replace:true,
        templateUrl: 'js/app/sidebar/sidebar-template.html',
        controller: sidebarCtrl
    };
})

.directive('sidebarToggleButton',function(){
    return {
        restrict: 'E',
        replace:true,
        templateUrl: 'js/app/sidebar/sidebarButton-tempalte.html',
        controller: sidebarCtrl
    };
})

   
     
     
var sidebarCtrl = function($scope, $mdSidenav,$log, $mdMedia){
        
    //$scope.initNav = function(){$mdSidenav('left').open();};
    $scope.lockBar = true;
    
    $scope.toggleLeft = function () {
//        if($mdSidenav('left').isOpen()){
//            $scope.lockBar = false;
//            $mdSidenav('left').close();
//        }else{
//           $scope.lockBar = true; 
//            $mdSidenav('left').open();
//        } 
    
    };

};


     
      




}());


