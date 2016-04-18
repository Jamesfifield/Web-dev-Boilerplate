(function () {
    'use strict';

    angular.module('app')
        .controller('loginCtrl',function(auth, $location, currentAuth, toast){
            this.title = "Login";
			
			this.isLoggedIn = !!currentAuth;
		

			this.loginUser = function(usr){
					console.log(usr);
					auth.$authWithPassword({email: usr.email, password: usr.password}).then(function(){
						toast.show("Welcome");
						$location.path('/home');
					}).catch((function(error){
						
						  this.errorMessage = error.code;
						
						
						
					}).bind(this));
					};
			
			this.fbLogin = function(){
				auth.$authWithOAuthPopup("facebook").then(function(){
						$location.path('/home');
					}).catch((function(err){
						this.errorMessage = err.code;    //this wont refer to controller so must bind
					}).bind(this));
			};
            
        });

   

}());