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

    $(".hov-h3").css("margin-top", "-100px");
    $(".hov-p").css("margin-top", "-100px");
    $(".hover-circ").css("margin-top", "500px");

    $(".hover").on({
        mouseenter: function () {
            $(".hov-h3").animate({"margin-top": "20px"}, 1000);
            $(".hov-p").animate({"margin-top": "20px"}, 1000);
            $(".hover-circ").animate({"margin-top": "0"}, 1000);
        },
        mouseleave: function () {
            $(".hov-h3").css("margin-top", "-100px");
            $(".hov-p").css("margin-top", "-100px");
            $(".hover-circ").css("margin-top", "500px");       
         }
    });
})