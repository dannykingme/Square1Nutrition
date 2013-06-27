function thirty_pc() {
    var height = $(window).height();
    var thirtypc = (105 * height) / 100;
    thirtypc = parseInt(thirtypc) + 'px';
    $(".contact").css('height', thirtypc)
}
$(document).ready(function () {
    thirty_pc();
    $(window).bind('resize', thirty_pc)
});
$(document).ready(function () {
    $('body').smoothScroll(600);
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(41.875, -87.675),
            zoom: 14,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#222222"
                }]
            }, {
                "featureType": "administrative.province",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#7f411b"
                }]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#dddddd"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#f06a1b"
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff8436"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff924c"
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffad78"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ff9f63"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ff924c"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffbf95"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ff924c"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ef5f17"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffad78"
                }]
            }]
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
    }
    $(".phone-btn").popover({
        placement: "right",
        trigger: "hover",
        delay: {
            show: 300,
            hide: 100
        },
        title: "We'd love to hear from you",
        content: "1.630.699.1918"
    });
    $(".beam-me-up").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.beam-me-up').fadeIn(1000)
            } else {
                $('.beam-me-up').fadeOut()
            }
        })
    })
});
//$(window).scroll(function () {
//    if ($(window).scrollTop() <= 100) {
//        $(".rdy-logo").fadeIn("slow")
//    } else {
//        $(".rdy-logo").fadeOut("fast")
//    }
//});
(function (a, c) {
    var b = (function () {
        var d = c(a.documentElement),
            f = c(a.body),
            e;
        if (d.scrollTop()) {
            return d
        } else {
            e = f.scrollTop();
            if (f.scrollTop(e + 1).scrollTop() == e) {
                return d
            } else {
                return f.scrollTop(e)
            }
        }
    }());
    c.fn.smoothScroll = function (d) {
        d = ~~d || 400;
        return this.find('a[href*="#"]').click(function (f) {
            var g = this.hash,
                e = c(g);
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                if (e.length) {
                    f.preventDefault();
                    b.stop().animate({
                        scrollTop: e.offset().top
                    }, d, function () {
                        location.hash = g
                    })
                }
            }
        }).end()
    }
}(document, jQuery));
$(document).ready(function () {
    $(".twitter-btn").popover({
        placement: "right",
        trigger: "hover",
        delay: {
            show: 300,
            hide: 100
        },
        html: true,
        title: "Jennifer just tweeted:",
        content: function () {
            return $("#tweet").html()
        }
    });
    $.getJSON("https://api.twitter.com/1/statuses/user_timeline/sq1_nutrition.json?count=1&include_rts=1&callback=?", function (e) {
        $("#tweet").html(e[0].text)
    })
})
skrollr.init();