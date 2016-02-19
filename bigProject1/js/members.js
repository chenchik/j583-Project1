var app = angular.module('members', []);

app.controller('membersController', ['$http', function($http) {

    this.members = [];
    var _this = this;
	
	this.repubActive = true;
	this.democActive = true;
	this.indepActive = true;
	
	this.current = '';
	
	this.sortBy = function(type){
		this.current = type;
		
		
	}
	
	this.checkIfCandidates = function(member){
		
		
		if(member.candidates.length > 0){
			return true;
		}
		else{
			return false;
		}
	}
	
	this.lastStateChecked = 'xyz'; //dummy value
	
	this.checkState = function(member){
		
		console.log("something");
		
		var state = member.state;	
		if(state == this.lastStateChecked){
			return false;
		}
		
		else{
			this.lastStateChecked = state;
			return true;
		}
	}
	
	this.toggleParty = function(party){
		console.log(this.indepActive);
		if(party == 'Republican'){
			this.repubActive = !this.repubActive;
			//console.log(this.repubActive);
			if(!this.repubActive){
				$('#repubIcon').css({'color': 'rgba(255,255,255,0.0)'});
			}
			else{
				$('#repubIcon').css({'color': 'rgba(255,255,255,1.0)'});
			}
		}
		else if(party == 'Democrat'){
			this.democActive = !this.democActive;
			//console.log(this.democActive);
			if(!this.democActive){
				$('#democIcon').css({'color': 'rgba(255,255,255,0.0)'});
			}
			else{
				$('#democIcon').css({ 'color': 'rgba(255,255,255,1.0)'});
			}
		}
		else{
			console.log("indpendent is right now " + this.indepActive);
			this.indepActive = !this.indepActive;
			console.log("now its " + this.indepActive);
			//console.log(this.democActive);
			if(!this.indepActive){
				$('#indepIcon').css({'color': 'rgba(255,255,255,0.0)'});
			}
			else{
				$('#indepIcon').css({ 'color': 'rgba(255,255,255,1.0)'});
			}
		}
		event.preventDefault();
		return false;
		
	}
	
	this.currentParty = function(member){
		var party = member.party;
		//console.log("The current member is : " + member.name + " their party is: " + party);
		
		
		if(party == 'Republican' && this.repubActive){
			//console.log("returning true to republican ");
			return true;
		}
		else if(party == 'Democrat' && this.democActive){
			//console.log("returning true to Democrat ");
			return true;
		}
		else if(party == 'Independent' && this.indepActive){
			//console.log("returning true to Democrat ");
			return true;
		}
		else{
			//console.log("returning false");
			return false;
		}
		
		
		
	}
	
	this.setStateClass = function(member){
		var state = member.state;	
		if(state == this.lastStateChecked){
			return 'second'+state;
		}
		
		else{
			//this.lastStateChecked = state;
			return 'first'+state;
		}
		
	}
	this.setStateClassForMemebers = function(member){
		var state = member.state;	
		if(state == this.lastStateChecked){
			return 'senatesecond'+state;
		}
		
		else{
			//this.lastStateChecked = state;
			return 'senatefirst'+state;
		}
		
	}

    $http.get('/bigProject1/js/congress.json')
        .success(function(data) {
            console.log(data);
            console.log(this);
            _this.members = data;
        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });
		
	this.isContested = function(member){
		var x = _this.members.indexOf(member);
		
		if(_this.members[x].contested){
			return "contested"
		}
		else{
			return "not contested"
		}
		
	}
	this.contestedClass = function(member){
		if(member.contested){
			return "isContested";
		}
		else{
			return "isNotContested"
		}
	}
	
	this.getCorrectUncheckedBox = function(member){
		
		if(member.party == 'Republican'){

			return "img/uncheckedRed.png"
		}
		else if(member.party == 'Democrat'){
			
			return "img/uncheckedBlue.png";
		}
		else{
			
			return "img/unchecked.png"
		}
	}
	this.getCorrectCheckedBox = function(member){
		if(member.party == 'Republican'){	
			return "img/checkedRed.png"
		}
		else if(member.party == 'Democrat'){
			return "img/checkedBlue.png";
		}
		else{
			return "img/checked.png"
		}
	}
	
	this.isRunning = function(member){
		if(member.running){
			//console.log("running");
			return "Running";
		}
		//cant do else because it might pick up on undefined values
		else if(!member.running){
			//console.log(" not running");
			return "Not Running";
		}
	}
	
	this.setPartyBorder = function(member){
		if(member.party == 'Republican'){
			return 'republicanBorder';
		}
		else if(member.party == 'Democrat'){
			return 'democraticBorder';
		}
		else if(member.party == 'Green Party'){
			return 'greenPartyBorder';
		}
		else{
			return 'otherBorder';
		}
	}
	
	

    /*this.isBlueSteel = function(player) {
        return (player.minutes < 15);
    }

    this.isEveryone = function() {
        return true;
    }

    this.isStarter = function(player) {
        return (player.minutes > 100);
    }*/

}]);