(function ($) {
    "use strict";
    
    // JS Index
    //----------------------------------------
    // 1. sticky menu
    // 2. mobile-menu(mean-menu)
    // 3. preloader
    // 4. mobile-menu-sidebar
    // 5. background image
    // 6. One Page Nav
    // 7. testimonial active
    // 8. counter js
    // 9. tilt js
    // 10. aos js
    // 11. Animate the scroll to top
    //-------------------------------------------------



    // 1. sticky menu
    // ---------------------------------------------------------------------------
    var wind = $(window);
    var sticky = $("#header-sticky");
    wind.on('scroll', function () {
        var scroll = $(wind).scrollTop();
        if (scroll < 2) {
            sticky.removeClass("sticky-menu");
        } else {
            $("#header-sticky").addClass("sticky-menu");
        }
    });




    // 2. mobile-menu(mean-menu)
    //---------------------------------------------------------------------------
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });



    // 3. preloader
    //---------------------------------------------------------------------------
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });



    // 4. mobile-menu-sidebar
    //---------------------------------------------------------------------------
    $(".mobile-menubar").on("click", function(){
        $(".side-mobile-menu").addClass('open-menubar');
        $(".body-overlay").addClass("opened");
    });
    $(".close-icon").click(function(){
        $(".side-mobile-menu").removeClass('open-menubar');
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function () {
		$(".side-mobile-menu").removeClass('open-menubar');
		$(".body-overlay").removeClass("opened");
	});



    // 5. background image
    //---------------------------------------------------------------------------
    $("[data-background]").each(function (){
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
    });



    // 6. One Page Nav
    //---------------------------------------------------------------------------
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });



    // 7. testimonial active
    //---------------------------------------------------------------------------
    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        prevArrow:'<b><span class="fal fas fa-angle-left l-a"></span></b>',
        nextArrow:'<b><span class="fal fas fa-angle-right r-a"></span></b>',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


        
    // 8. counter js
    // ---------------------------------------------------------------------------
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



    // 9. tilt js
    // ---------------------------------------------------------------------------
    $('.tilt').tilt({
        maxTilt:        15,
        perspective:    1500,
    });



    // 10. aos js
    // ---------------------------------------------------------------------------
    AOS.init();



    // 11. Animate the scroll to top
    // --------------------------------------------------------------------------
    // Show or hide the sticky footer button
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 600){
            $('#scroll').fadeIn(1000);
        } else{
            $('#scroll').fadeOut(1000);
        }
    });

    $('#scroll').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


        
})(jQuery);	  

