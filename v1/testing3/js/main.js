/* $(document).ready(function() {

	var things = $('.container');
	
	$(window).scroll(function() {		
		var offset = window.pageYOffset;

		$('.number1').css({
			"background-position" :"center "+ (50 - (offset / 4))+"%"
		});
		
	});
});
*/

$(document).ready(function() {
	var things = $('.container');	
	$(window).scroll(function(){
		var offset = window.pageYOffset;
		$('body').css            ({"background-position":"0"+(0+(offset*1.3))+"px"});
		$('.cover-one').css      ({"height":(0+(offset*3))+"px","max-height":"570px"});
		$('.cover-three').css    ({"height":(100-(offset*.3))+"%","min-height":"520px"});
		$('.statement').css   ({"top":(0-(offset*1.0))+"px"});
		$('.emboss').css   ({"opacity":(0+(offset/820))});
		$('.photo1').css         ({"top":(1888-(offset/1.5))+"px"});
		$('.photo2').css         ({"top":(1244-(offset/3.1))+"px"});
		$('.services').css       ({"top":(200-(offset/4))+"px"});
		$('.mailbox').css       ({"top":(2400-(offset/2))+"px"});
	});
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
				  "stylers":[{"visibility":"on"} ,
							 {"color":"#222222"}]
				},
				{"featureType":"administrative.province",
				  "elementType":"labels.text.fill",
				  "stylers":[{"color":"#444444"},
							 {"visibility":"on"}]
				},
				{"featureType":"administrative.locality",
				  "elementType":"labels.text.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#7f411b"}]
				},
				{"featureType":"administrative.neighborhood",
				  "elementType":"labels.text.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#dddddd"}]
				},
				{"featureType":"landscape.natural",
				  "elementType":"geometry.fill",
				  "stylers":[{"visibility":"on"} ,
							 {"color":"#f06a1b"}]
				},
				{"featureType":"landscape.man_made",
				  "elementType":"geometry.fill",
				  "stylers":[{"color":"#ff8436"} ,
							 {"visibility":"on"}]
				},
				{"featureType":"poi.business",
				  "elementType":"geometry.fill",
				  "stylers":[{"color":"#ff924c"},
							 {"visibility":"on"}]
				},
				{"featureType":"road.highway",
				  "elementType":"geometry.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#ffad78"}]
				},
				{"featureType":"road.arterial",
				  "elementType":"geometry.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#ff9f63"}]
				},
				{"featureType":"road.local",
				  "elementType":"geometry.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#ff924c"}]
				},
				{"featureType":"road",
				  "elementType":"labels.text.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#ffbf95"}]
				},
				{"featureType":"transit.line",
				  "elementType":"geometry.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#ff924c"}]
				},
				{"featureType":"water",
				  "elementType":"geometry.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#ef5f17"}]
				},
				{"featureType":"water",
				  "elementType":"labels.text.fill",
				  "stylers":[{"visibility":"on"},
							 {"color":"#ffad78"}]
				}
			]
		};
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
		google.maps.event.addDomListener(window, 'load', initialize);
});

$("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })