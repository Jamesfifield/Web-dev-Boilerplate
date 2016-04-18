(function () {
    'use strict';

	angular.module('app')
		.directive('authButton', function(auth){
			return{
				restrict: 'E',
				template: "<md-button ng-click='logout()'>Logout</md-button>",
							
			};
		   
	});

   

}());