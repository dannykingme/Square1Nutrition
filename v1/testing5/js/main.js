/* Map Viewport Height */
function thirty_pc() {
    var height = $(window).height();
    var thirtypc = (105 * height) / 100;
    thirtypc = parseInt(thirtypc) + 'px';
    $(".contact").css('height',thirtypc);
}
$(document).ready(function() {
    thirty_pc();
    $(window).bind('resize', thirty_pc);
});

$(document).ready(function() {
	/* Paralax Scrolling */
	$(window).scroll(function(){
		var offset = window.pageYOffset;
		$('body').css          ({"background-position":"0px "+(0-(offset*1.3))+"px"});
		//$('.cover-one').css    ({"height":(0+(offset*3))+"px","max-height":"570px"});
		$('.cover-one').css    ({"height":(0+(offset*2))+"px","max-height":($(window).height()/1.85)});
		//$('.cover-three').css  ({"height":(100-(offset*.3))+"%","min-height":"520px"});
		//$('.cover-three').css  ({"height":($(window).height() - (offset*2))+"px","min-height":"250px"});
		$('.cover-three').css  ({"height":(($(window).height()*1.1) - (offset*2))+"px","min-height":($(window).height()/2)});
		$('.statement').css    ({"top":(0-(offset*1.0))+"px"});
		$('.emboss').css       ({"opacity":(0+(offset/820))});
		$('.photo1').css       ({"top":(1777-(offset/1.5))+"px"});
		$('.photo2').css       ({"top":(1199-(offset/3.1))+"px"});
		//$('.services').css     ({"top":(200-(offset/4))+"px"});
		$('.services').css     ({"top":(100-(offset/3))+"px"});
		//$('.mailbox').css      ({"top":(2250-(offset/2))+"px"});
		//$('.mailbox').css      ({"top":(2075-(offset*.48))+"px"});
		$('.mailbox').css      ({"top":(200-(offset*.0465))+"%"});
		//$('.map-pusher').css   ({"height":((109*100)-(offset*2.5))+"px"});
		$('.map-pusher').css   ({"height":((99*100)-(offset*2.5))+"px"});
	});
	/* Google Map Styles */
	google.maps.event.addDomListener(window, 'load', initialize);
	function initialize(){
		var mapProp={
			center:new google.maps.LatLng(41.883333,-87.633333),
			zoom:14,
			scrollwheel:false,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			styles:[
				{"stylers":[{"saturation": -100},
							{"visibility":"off"}]
				},
				{"featureType":"administrative.country",
				 "elementType":"labels.text.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#222222"}]
				},
				{"featureType":"administrative.province",
				 "elementType":"labels.text.fill",
				 "stylers"    :[{"color":"#444444"},
								{"visibility":"on"}]
				},
				{"featureType":"administrative.locality",
				 "elementType":"labels.text.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#7f411b"}]
				},
				{"featureType":"administrative.neighborhood",
				 "elementType":"labels.text.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#dddddd"}]
				},
				{"featureType":"landscape.natural",
				 "elementType":"geometry.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#f06a1b"}]
				},
				{"featureType":"landscape.man_made",
				 "elementType":"geometry.fill",
				 "stylers"    :[{"color":"#ff8436"},
								{"visibility":"on"}]
				},
				{"featureType":"poi.business",
				 "elementType":"geometry.fill",
				 "stylers"    :[{"color":"#ff924c"},
								{"visibility":"on"}]
				},
				{"featureType":"road.highway",
				 "elementType":"geometry.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#ffad78"}]
				},
				{"featureType":"road.arterial",
				 "elementType":"geometry.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#ff9f63"}]
				},
				{"featureType":"road.local",
				 "elementType":"geometry.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#ff924c"}]
				},
				{"featureType":"road",
				 "elementType":"labels.text.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#ffbf95"}]
				},
				{"featureType":"transit.line",
				 "elementType":"geometry.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#ff924c"}]
				},
				{"featureType":"water",
				 "elementType":"geometry.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#ef5f17"}]
				},
				{"featureType":"water",
				 "elementType":"labels.text.fill",
				 "stylers"    :[{"visibility":"on"},
								{"color":"#ffad78"}]
				}
			]
		};
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	/* Contact Phone Popover */
	$(".phone-btn").popover(
		{
			placement:"right",
			trigger:"hover",
			delay:{show:300,hide:100},
			title:"I'd love to hear from you",
			content:"1.555.555.5555"
	});
});