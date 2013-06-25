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
			"background-position" : "0 "+ (0 - (offset * 2.75))+"px"
		});
		$('.cover-one').css({
			"height" : (120 + (offset * 3))+"px" , "max-height" : "500px"
		});
		$('.cover-three').css({
			"height" : (800 - (offset * 2))+"px" , "min-height" : "0" , "min-height" : "500px"
		});
		$('.mission-type').css({
			"top" : (0 - (offset * 2.75))+"px"
		});
		
	});
});