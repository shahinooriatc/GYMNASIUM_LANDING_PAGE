$(function ($) {
'use strict'
    
    //Banner Slider Start

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    $('.venobox').venobox();


    //Testimonial slider 

    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        
        
        
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
        
    });


    //Team Part Start
     $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
         
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
          dots:false,
          arrows:false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      }
    }
  ]
    });

    
    
    
    //Counter Part Start

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Client Slider Start

    $('.client_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        nextArrow: '<button class="right_arrow"><i class="fas fa-chevron-right c_next"></i></button>',
        prevArrow: '<button class="left_arrow"><i class="fas fa-chevron-left c_prev"></i></button>',
        
        
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
            
                {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
          arrows:false,
          dots:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
          arrows:false,
          dots:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          arrows:false,
          dots:false,
      }
    }
  ]
        
        
    });

//Menu fix Class remove or add
    var navoff = $('.main_menu').offset().top;
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling >navoff ){
              $('.main_menu').addClass('menu_fix');
           }
        
        else{
            $('.main_menu').removeClass('menu_fix');
        }
    });
    
});
