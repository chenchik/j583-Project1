var app = angular.module('myApp',['members']);

app.controller('BaseController', ['$http', function($http) {
	
	this.current = '';
	this.reverse = false;
	
	this.sortBy = function(type){
		
		
		var c = this.current;
		var ri;
		if(c == type){
			this.reverse = !this.reverse;
			ri = (this.reverse)? 'Reversed' : 'not Reversed';
		}
		else{
			ri = 'Not Reversed';
			this.reverse = false;
		}
		this.current = type;
		
		
		
		event.preventDefault();
		
		
	}
}]);




