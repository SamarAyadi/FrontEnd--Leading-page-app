$(function(){
    'use strict';    

    /* 
     Counter js
   ========================================================================== */
       $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });



/* 
     Testimonials js
   ========================================================================== */

       $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });


/* 
     Blog js
   ========================================================================== */

       $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile: [600, 1],
        navigation : false,
        pagination:false,
        autoPlay : true
    });


    /* Slick Testimonial
  ========================================================*/
    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }



    // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 54)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
    });

    var $window = $(window);
    // :: 8.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 300) {
            $('.main_navbar').addClass('sticky slideInDown');
        } else {
            $('.main_navbar').removeClass('sticky slideInDown');
        }
    });

     // :: 9.0 Preloader Active code
    $window.on('load', function () {
        $('.body-wrapper').fadeIn('slow');
        $('.spinner').fadeOut(100, function () {
            $('#preloader').remove();
        });
    });


});

/* 
    Portfilio js
   ========================================================================== */
     
     $(function () {

           var filterList = {

               init: function () {

                   $('#portfoliolist1').mixItUp({
                   selectors: {
                     target: '.portfolio1',
                     filter: '.filter'
                 },
                 load: {
                 filter: '.app'
               }
                   });

               }

           };

           // Run the show!
           filterList.init();

       });