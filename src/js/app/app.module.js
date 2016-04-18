(function () {
    'use strict';

   var app = angular.module('app', ['ngMaterial','ui.router', 'firebase'])
   
   				.run(function($rootScope, $state){
					$rootScope.$on("$stateChangeError", function(ev,toState, toParams, fromState, fromParams, error){
						if(error === "AUTH_REQUIRED"){
								$state.go("login");
							}
						else{
							console.log(error);
						} 
					});
				})
   
   
             .config(function($mdThemingProvider,$urlRouterProvider,$stateProvider) {
                  $urlRouterProvider.otherwise("/home");
                  //TODO refactor using angular components
                  $stateProvider
                    .state('home', {
                      url: "/home",
                      controller: "homeCtrl",
                      controllerAs: '$ctrl',
                      templateUrl: "js/app/home/home.html"
                    })
                  .state('motorcycle', {
                      url: "/motorcycle",
                      controller: "motorcyleCtrl",
                      controllerAs: '$ctrl',
                      templateUrl: "js/app/motorcycle/motorcycle.html"
                    })
                  .state('rental', {
                      url: "/rentals",
                      controller: "rentalCtrl",
                      controllerAs: '$ctrl',
                      templateUrl: "js/app/rentals/rentals.html"
                    })
                   .state('accessory', {
                      url: "/accessory",
                      controller: "accessoryCtrl",
                      controllerAs: '$ctrl',
                      templateUrl: "js/app/accessory/accessory.html"
                    })
				   .state('parts', {
                      url: "/parts",
                      controller: "partsCtrl",
                      controllerAs: '$ctrl',
                      templateUrl: "js/app/parts/parts.html",
					  resolve: {
						  currentAuth: function(auth){
							  var temp = auth.$requireAuth();
							  return temp;
						  }
					  }
				  })
                  .state('login', {
                      url: "/login",
                      controller: "loginCtrl",
                      controllerAs: '$ctrl',
                      templateUrl: "js/app/login/login.html",
					  resolve: {
						  currentAuth: function(auth){
							
							  return auth.$waitForAuth();
						  }
					  }
                    })
                  .state('notFound', {
                      url: "/404",
                      template: "<h1>404 Page not found</h1>"
                    });
              
                
      
                 
                   $mdThemingProvider.definePalette('adrenilynBackgroundPallet', {
                    '50': 'fff', // black
                    '100': '2d2d2d', //black
                    '200': '222', // dark Grey
                    '300': '0000FF',
                    '400': '222',
                    '500': 'f05a28',
                    '600': '000',
                    '700': '000',
                    '800': '000',
                    '900': '000',
                    'A100': '000',
                    'A200': '000',
                    'A400': '000',
                    'A700': '000',
                    'contrastDefaultColor': 'dark',
                    'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
                    'contrastLightColors': undefined  
                  });
                 
                 $mdThemingProvider.definePalette('adrenilynIconPallet', {
                    '50': 'f05a28', // orange
                    '100': 'D32F2F', //red
                    '200': '222', // dark Grey
                    '300': '0000FF',
                    '400': '222',
                    '500': '0f0',
                    '600': '000',
                    '700': '000',
                    '800': '000',
                    '900': '000',
                    'A100': '000',
                    'A200': '000',
                    'A400': '000',
                    'A700': '000',
                    'contrastDefaultColor': 'dark',
                    'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
                    'contrastLightColors': undefined  
                  });
                
                 $mdThemingProvider.theme('default') 
                  .primaryPalette('adrenilynBackgroundPallet',{
                      'default' : '50',
                      'hue-1' : '50',
                      'hue-2' : '100',
                      'hue-3' : '200'
                     
                 }).accentPalette('adrenilynIconPallet',{
                      'default' : '50',
                      'hue-1' : '50',
                      'hue-2' : '100',
                      'hue-3' : '200'
                     
                 }).warnPalette('adrenilynBackgroundPallet',{
                      'default' : '50',
                      'hue-1' : '50',
                      'hue-2' : '100',
                      'hue-3' : '200'
                     
                 });


                 
                 
               });
  
   

}());