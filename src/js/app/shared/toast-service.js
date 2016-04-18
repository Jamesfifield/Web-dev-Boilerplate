(function () {
    'use strict';

angular.module('app')
	.service('toast', function($mdToast) {
		  return { 
			show: function(content) {
			return $mdToast.show(
			  $mdToast.simple()
				.content(content)
				.position('bottom right')
				.hideDelay(1000)
			)}
		  };
		}) 

   

}());