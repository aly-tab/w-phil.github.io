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

    $(".person-image").css("margin-left", "-1000px");
    $(".about-text-boxes").css("margin-left", "3000px");
    $(".hideme").hide();

    $(window).scroll( function(){
        $('.person-image').each( function() {
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
        $('.hideme').each( function(i) {
          var pageTop = $(this).offset().top + $(this).outerHeight() * 0.35;
          var windowBottom = $(window).scrollTop() + $(window).height();
            if(windowBottom > pageTop) {
                $(".hideme").delay(1500).fadeIn(500);
            } 
        }); 
    });

    $(document).ready(function(){
        $( "a.button-click" ).click(function( event ) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        });
    });

    $(document).ready(function(){
        $( "a.second-button" ).click(function( event ) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
        });
    });
})