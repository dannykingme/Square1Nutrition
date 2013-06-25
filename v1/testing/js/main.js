/* $(document).ready(function() {

	var things = $('.container');
	
	$(window).scroll(function() {		
		var offset = window.pageYOffset;

		$('.number1').css({
			"background-position" : "center "+ (50 - (offset / 4))+"%"
		});
		
	});
});
*/

$(document).ready(function() {

	var things = $('.container');
	
	$(window).scroll(function() {		
		var offset = window.pageYOffset;

		$('body').css({
			"background-position" : "0 "+ (0 + (offset * 1.3))+"px"
		});
		$('.cover-one').css({
			"height" : (0 + (offset * 3))+"px" , "max-height" : "570px"
		});
		$('.cover-three').css({
			"height" : (100 - (offset * .3))+"%" , "min-height" : "520px"
		});
		/*
		$('.cover-three').css({
			"height" : (800 - (offset * 2))+"px" , "min-height" : "0" , "min-height" : "500px"
		});
		*/
		$('.mission-type').css({
			"top" : (0 - (offset * 1.0))+"px"
		});
		/*
		$('.mission-type').css({
			"top" : (0 - (offset * 2.0))+"px"
		});
		*/
		$('.photo1').css({
			"top" : (970 - (offset / 6.1))+"px"
		});	
		$('.photo2').css({
			"top" : (1220 - (offset / 3.1))+"px"
		});	
		$('.services').css({
			"top" : (200 - (offset / 4))+"px"
		});			
		
	});
	
});