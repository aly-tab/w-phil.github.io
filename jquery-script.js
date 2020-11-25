$(document).ready(() => {
    
    $(window).scroll( function(){
            $('.hidden').each( function(i) {
              var pageTop = $(this).offset().top + $(this).outerHeight() * 0.35;
              var windowBottom = $(window).scrollTop() + $(window).height();
                if(windowBottom > pageTop) {
                    $(this).animate({'opacity':'1'}, 1500); 
                } 
        }); 
    });

    $(".personal-image").css("margin-left", "-1000px");
    $(".about-text-boxes").css("margin-left", "3000px");
    $(".hideme").css("opacity", 0.01);

    $(window).scroll( function(){
        $('.personal-image').each( function() {
          var pageTop = $(this).offset().top + $(this).outerHeight() * 0.35;
          var windowBottom = $(window).scrollTop() + $(window).height();
            if(windowBottom > pageTop) {
                $(this).animate({'margin-left': '0'}, 1500); 
            } 
        }); 
    });

    $(window).scroll( function(){
        $('.about-text-boxes').each( function() {
          var pageTop = $(this).offset().top + $(this).outerHeight() * 0.35;
          var windowBottom = $(window).scrollTop() + $(window).height();
            if(windowBottom > pageTop) {
                $(this).animate({'margin-left': '0'}, 1500); 
            } 
        }); 
    });

    $(window).scroll( function(){
        $('.hideme').animate({"opacity": '1'}, 3000);
    });

    $( ".home a" ).click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    $( ".about a" ).click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    $( ".portfolio a" ).click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    $( ".contact a" ).click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    $( "a.button-click" ).click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });

    $( "a.second-button" ).click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
    });

    $(window).scroll( function(){
        $('.hidden').each( function(i) {
          var pageTop = $(this).offset().top + $(this).outerHeight() * 0.35;
          var windowBottom = $(window).scrollTop() + $(window).height();
            if(windowBottom > pageTop) {
                $(this).animate({'opacity':'1'}, 1500); 
            } 
        }); 
    });

    $(".hov-h3").css("margin-top", "-200px");
    $(".hov-p").css("margin-top", "-10px");
    $(".hover-circ").css("margin-top", "700px");

    $(".hover").on({
        mouseenter: function () {
            $(".hov-h3").animate({"margin-top": "20px"}, 400);
            $(".hov-p").animate({"margin-top": "20px"}, 200);
            $(".hover-circ").animate({"margin-top": "0"}, 400);
        },
        mouseleave: function () {
            $(".hov-h3").css("margin-top", "-200px");
            $(".hov-p").css("margin-top", "-10px");
            $(".hover-circ").css("margin-top", "500px");       
         }
    });

    $(".block").click(function () {
        $(".hover").slideToggle("slide");
    });

        $( "a.button-click" ).click(function(event) {
            $(this).mouseover();

        });
})