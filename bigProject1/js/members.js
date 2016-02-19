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
		
		if(party == 'Republican'){
			this.repubActive = !this.repubActive;
			
			if(!this.repubActive){
				$('#repubIcon').css({'color': 'rgba(255,255,255,0.0)'});
			}
			else{
				$('#repubIcon').css({'color': 'rgba(255,255,255,1.0)'});
			}
		}
		else if(party == 'Democrat'){
			this.democActive = !this.democActive;
			
			if(!this.democActive){
				$('#democIcon').css({'color': 'rgba(255,255,255,0.0)'});
			}
			else{
				$('#democIcon').css({ 'color': 'rgba(255,255,255,1.0)'});
			}
		}
		else{
			
			this.indepActive = !this.indepActive;

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
		
		if(party == 'Republican' && this.repubActive){
			
			return true;
		}
		else if(party == 'Democrat' && this.democActive){
			
			return true;
		}
		else if(party == 'Independent' && this.indepActive){
			
			return true;
		}
		else{
			
			return false;
		}
		
		
		
	}
	
	this.setStateClass = function(member){
		var state = member.state;	
		if(state == this.lastStateChecked){
			return 'second'+state;
		}
		
		else{
			
			return 'first'+state;
		}
		
	}
	this.setStateClassForMemebers = function(member){
		var state = member.state;	
		if(state == this.lastStateChecked){
			return 'senatesecond'+state;
		}
		
		else{
			
			return 'senatefirst'+state;
		}
		
	}
	
	//json being loaded contains info about all senators and their contestants
	//I included all the photos for the candidates and their bios
	//You told me that would be okay in substitution of adding their platform positions

    $http.get('/bigProject1/js/congress.json')
        .success(function(data) {
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
		else if(!member.running){
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

}]);