$(document).ready(function() {
	var cw = $('#politicsContainer .congressContainer .contestants .contestantBoxes .candidatePhoto').width();
	console.log("width is"  + cw);
	
	//$()
	
    //$('#politicsContainer').on('click','.congressContainer .currentCongressContainer .basicInfoContainer .labelsContainer .contestedLink', function(e) {
	
	$('#politicsContainer').on('click','.congressContainer', function(e) {
		
		
		
		
		//console.log(this.parentNode.parentNode.parentNode.parentNode); 
		
		var congressContainer = this;
		console.log(congressContainer);
		var contestants = null;
		
		if($(congressContainer).hasClass('isContested')){
		
		
			//look for the .contestants node
			for(var i = 0; i < congressContainer.childNodes.length; i++){
				var jQueriedChildNode = $(congressContainer.childNodes[i]);
				//console.log(congressContainer.childNodes[i].c)
				if(jQueriedChildNode.hasClass('contestants')){
					contestants = jQueriedChildNode;
					
					
					console.log("found the contestants");
					//break;
				}
			}
			
			//if(contestants)
			
			
			
			
			//console.log("width is"  + cw);
			//console.log("clicked");
			//console.log();
			console.log(contestants);
			contestants.slideToggle("fast");
			contestants.addClass('newSlidingCSS');
			
			var theWidth = $('.contestants .contestantBoxes .candidatePhoto').width();
			$('.contestants .contestantBoxes .candidatePhoto').css({'height' : theWidth+'px'});
			
			console.log(theWidth);
			e.stopPropagation();
		}
		return false;
    });
	
	
	
	
	
	//#politicsContainer .congressContainer .contestants .candidateFullBox .contestantBoxes a
	// $('#politicsContainer').on('click','.congressContainer .contestants .candidateFullBox .contestantBoxes a', function(e) {
	$('#politicsContainer').on('click','.congressContainer .contestants .candidateFullBox', function(e) {
		 
		 
		console.log(this.parentNode.parentNode); 
		//this.css({'border':'5px solid red'});
		//console.log("clciked candidates a");
		//var lookingFor = $(#politicsContainer);
		
		
		var box = $('.candidateFullBox');
		//getting cnadidateFullBox
		var originalBox = this;
		var box = $(this);
		//second child
		var contestantBoxes = null;
		//fourth child
		//come back and figure out how to 
		var contestantBio = $(originalBox.childNodes[3]);
		console.log(Array.isArray(originalBox.childNodes));
		console.log(originalBox.childNodes instanceof Object);
		
		
		
		
		for(var i = 0; i < originalBox.childNodes.length; i++){
			//console.log("current child item is .. " + originalBox.childNodes[i]);
			//console.log(originalBox.childNodes[i]);
			var jQueriedChildNode = $(originalBox.childNodes[i]);
			//console.log("looking for class of contestantBoxes....");
			//console.log(jQueriedChildNode.hasClass('contestantBoxes'));
			
			
			
			if(jQueriedChildNode.hasClass('contestantBoxes')){
				console.log("found contestant Boxes");
				contestantBoxes = $(originalBox.childNodes[i]);
			}
			else if(jQueriedChildNode.hasClass('contestantBio')){
				contestantBio = $(originalBox.childNodes[i]);
			}
			else{
				console.log("not found");
			}
			
		}
		
		//console.log(originalBox.childNodes[document.getElementsByClassName('contestantBoxes')]);
		
		
		if(box.hasClass('col-md-2')){
			box.removeClass('col-md-2 col-sm-4 col-xs-6');
			box.addClass('col-md-6 col-sm-8 col-xs-12');
			
			//console.log(typeOf(originalBox.childNodes));
			console.log(originalBox.childNodes);
			
			contestantBoxes.css({'width':'33%'});
			//$('.contestantBoxes').css({'width':'33%'});
			
		}
		else{
			box.removeClass('col-md-6 col-sm-8 col-xs-12');
			box.addClass('col-md-2 col-sm-4 col-xs-6');
			contestantBoxes.css({'width':'100%'});
			//$('.contestantBoxes').css({'width':'100%'});
			
		}
		//$('.contestantsBio').slideToggle("fast");
		contestantBio.slideToggle("fast");
		return false;
		
//		$('.candidateFullBox').removeClass("")
	 
	 
	 });
	 
	 $('#statesDiv').on('click', '.states', function(){
		var myClass = $(this).attr('class');
		console.log(myClass);
		myClass = myClass.split(' ');

		//myClass = myClass[myClass.length-1].split('');
		myClass = myClass[myClass.length-1];
		
		
		
		
		//console.log(myClass[myClass.length - 1]);
		
		console.log(myClass)
		myClass = '.senate'+myClass;
		console.log(myClass);
		
		$('html, body').animate({
			scrollTop: $(myClass).offset().top-60
		}, 500);
		return false;
	});
	
	
	
	
	$('#arrowTag').on('click', function(){
		console.log("clicked the arrow");
		$('html, body').animate({
			
			scrollTop: $('#superOuterPoliticsContainer').offset().top-60
		}, 500);
		return false;
	});
	
	$('#questionMark').on('click', function(e){
		$('#description').slideToggle('fast');
		
	})
});