(function () {
    'use strict';

    angular.module('app')
    .directive('appMenuBar', function(toast){
            return {
                restrict: 'E',
                templateUrl: 'js/app/menubar/appMenuBar-template.html',
				controller: function($scope,auth,$location){
					  
					$scope.logout = function(){
						auth.$unauth();
						toast.show("You have successfully logged out");
						$location.path('/home?');
					};


					$scope.$on('$locationChangeStart', function(event, newUrl, oldURL, newState) {
						auth.$waitForAuth().then(function(v){
							$scope.isLoggedIn = !!v;
						});
					});
				}//controller

				
            };
    });//module

   

}());//ifiy