$(document).ready(function(){
    // Edit time for slide
    $(".carousel").carousel({
        interval:4000
    });

    // for nice scroll
    $("html").niceScroll();

});

  //section Animation colors


$(document).ready(function(){
     $(".gear-option").click(function(){
         $(".color").show(1000);
     });
});

$(document).ready(function(){
     $(".color").click(function(){
         $(".color").hide(1000);
     });
});


    // for change The color
$(document).ready(function(){
    var ColorLi=$(".color ul li")

    ColorLi
    .eq(0).css("backgroundColor","#71ADB5").end()
    .eq(1).css("backgroundColor","#ffab00").end()
    .eq(2).css("backgroundColor","#964f8e").end()
    .eq(3).css("backgroundColor","#7FB414").end()
    .eq(4).css("backgroundColor","#12648c");

    ColorLi.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
       //console.log($(this).attr("data-value"))
    });

    // for Scroll Up
    var scroll = $(".scroll-up")
    $(window).scroll(function(){

        if($(this).scrollTop()>=700)
        {
            scroll.fadeIn();
        }
        else
        {
            scroll.fadeOut();
        }
        // animate for scroll

    });
        $(scroll).click(function(){
            $("html,body").animate({scrollTop:0},2000)
        });

});


// Carousel Feature Slide

;(function () {

	'use strict';

	// Carousel Feature Slide
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel-main');
		owl.owlCarousel({
			items: 1,
			mouseDrag: false,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: true,
			dots: true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		    navText: [
		      "<i class='icon-arrow-left2 owl-direction'></i>",
		      "<i class='icon-arrow-right2 owl-direction'></i>"
	     	]
		});
	};


	var owlCarouselScreenshots = function() {
		var owl = $('.owl-carousel-center').owlCarousel({
		    center: true,
		    items:1,
		    mouseDrag: false,
		    loop: false,
		    margin: 10,
		    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:4
	        },
	        1000:{
	            items:5
	        }
	    }
		});


		$('body').on('click', '.owl-item', function(){

			var $this = $(this),
				index = $this.index();

				console.log(index);
			$('.owl-carousel-center .owl-dots > div').eq(index).trigger('click');
		});
	}




	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}

			event.preventDefault();

		});

	};

	// Document on load.
	$(function(){

		burgerMenu();
		owlCrouselFeatureSlide();
		owlCarouselScreenshots();
	});
}());

// Chat box
var msg = document.getElementById("myMessage"),
    num = document.getElementById("ast");
msg.onkeyup= function () {
    'use strict';
    num.textContent= 80 - this.value.length ;
    if (num.textContent <0)
    {
		$(".error p").each(function () {
			$(this).animate({
				right:0
			});
        });
        num.style.color="red";
    }
    else
    {
        $(".error p").each(function () {
            $(this).animate({
                right:-600
            });
        });
        num.style.color="#9d9d9d";
    }
};


//Web Socket
$(document).ready(function() {
    var socket = io.connect('http://127.0.0.1:5000');
    socket.on('connect', function() {
        socket.send('User has connected!');
    });
    socket.on('message', function(msg) {
        $("#messages").append('<li>'+msg+'</li>');
        console.log('Received message');
    });
    $('#sendbutton').on('click', function() {
        socket.send($('#myMessage').val());
        $('#myMessage').val('');
    });
});

// web chat
