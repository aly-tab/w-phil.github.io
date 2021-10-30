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

    $(".block").click(function () {
        $(".hover").slideToggle("slide");
    });

        $( "a.button-click" ).click(function(event) {
            $(this).mouseover();

        });
})