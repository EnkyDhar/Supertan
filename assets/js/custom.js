


//Header Section

(function($){
	"use strict";
	jQuery(document).on('ready', function () {

		// Navbar Link Scroll JS
        $('.navbar-nav li a, .scroll-down, .main-banner-content .btn').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 60
            }, 1500);
            e.preventDefault();
        });
        $('.navbar .navbar-nav li a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
		});

		})
    })

        //Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar').addClass("is-sticky");
            }
            else {
                $('.navbar').removeClass("is-sticky");
            }
		});
    


// Counter

// this function used to creat th countUp  animation for business websites
// use the three parameters to customize it 
// call it for every element
// note that may be small diffrance in the count 100 be 99 so chack it 
function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    } 
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Projects",44,100);
numCounter("Clients",12,400);
numCounter("Partners",436,10);
numCounter("Awards",8,450);
// Counter


// CARD SLIDER AREA

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
		dot: true,
        margin: 20,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            320: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                items: 3
            },
            2000: {
                items: 4
            },
            3000: {
                items: 5
            }
        }
    })
});

