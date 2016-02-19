$(document).ready(function() {
	var cw = $('#politicsContainer .congressContainer .contestants .contestantBoxes .candidatePhoto').width();
	
	
	$('#politicsContainer').on('click','.congressContainer', function(e) {
		
		var congressContainer = this;
		var contestants = null;
		if($(congressContainer).hasClass('isContested')){
		
		
			//look for the .contestants node
			for(var i = 0; i < congressContainer.childNodes.length; i++){
				var jQueriedChildNode = $(congressContainer.childNodes[i]);
				if(jQueriedChildNode.hasClass('contestants')){
					contestants = jQueriedChildNode;
				}
			}
			
			contestants.slideToggle("fast");
			contestants.addClass('newSlidingCSS');
			
			var theWidth = $('.contestants .contestantBoxes .candidatePhoto').width();
			$('.contestants .contestantBoxes .candidatePhoto').css({'height' : theWidth+'px'});
			
			e.stopPropagation();
		}
		return false;
    });
	
	$('#politicsContainer').on('click','.congressContainer .contestants .candidateFullBox', function(e) {
		 
		var box = $('.candidateFullBox');
		//getting cnadidateFullBox
		var originalBox = this;
		var box = $(this);
		//second child
		var contestantBoxes = null;
		//fourth child
		var contestantBio = $(originalBox.childNodes[3]);

		
		
		
		
		for(var i = 0; i < originalBox.childNodes.length; i++){

			var jQueriedChildNode = $(originalBox.childNodes[i]);

			
			if(jQueriedChildNode.hasClass('contestantBoxes')){
			
				contestantBoxes = $(originalBox.childNodes[i]);
			}
			else if(jQueriedChildNode.hasClass('contestantBio')){
				contestantBio = $(originalBox.childNodes[i]);
			}
			
			
		}
		
		
		
		if(box.hasClass('col-md-2')){
			box.removeClass('col-md-2 col-sm-4 col-xs-6');
			box.addClass('col-md-6 col-sm-8 col-xs-12');
			contestantBoxes.css({'width':'33%'});
			
		}
		else{
			box.removeClass('col-md-6 col-sm-8 col-xs-12');
			box.addClass('col-md-2 col-sm-4 col-xs-6');
			contestantBoxes.css({'width':'100%'});
			
		}
		contestantBio.slideToggle("fast");
		return false;
		

	 
	 
	 });
	 
	 $('#statesDiv').on('click', '.states', function(){
		var myClass = $(this).attr('class');
		myClass = myClass.split(' ');
		myClass = myClass[myClass.length-1];
		myClass = '.senate'+myClass;		
		$('html, body').animate({
			scrollTop: $(myClass).offset().top-60
		}, 500);
		return false;
	});
	
	
	
	
	$('#arrowTag').on('click', function(){
		$('html, body').animate({
			
			scrollTop: $('#superOuterPoliticsContainer').offset().top-60
		}, 500);
		return false;
	});
	
	$('#questionMark').on('click', function(e){
		$('#description').slideToggle('fast');
		
	})
});