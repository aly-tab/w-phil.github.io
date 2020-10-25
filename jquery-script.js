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
        $( "a.button-click" ).click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
        });
    });

    $(document).ready(function(){
        $( "a.second-button" ).click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
        });
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

    $("#hov-h3-hov-1").css("margin-top", "-100px");
    $("#hov-p-hov-1").css("margin-top", "-100px");
    $("#hover-circ-hov-1").css("margin-top", "500px");
      $(document).ready(function(){
        $(".hover-1" ).mouseenter(function() {
            $("#hov-h3-hov-1").animate({"margin-top": "20px"}, 1000);
            $("#hov-p-hov-1").animate({"margin-top": "20px"}, 1000);
            $("#hover-circ-hov-1").animate({"margin-top": "0"}, 1000);
        }).mouseout(function() {
            $("#hov-h3-hov-1").css("margin-top", "-100px");
            $("#hov-p-hov-1").css("margin-top", "-100px");
            $("#hover-circ-hov-1").css("margin-top", "500px");       
        });
    });

    $("#hov-h3-hov-2").css("margin-top", "-100px");
    $("#hov-p-hov-2").css("margin-top", "-100px");
    $("#hover-circ-hov-2").css("margin-top", "500px");
    $(document).ready(function(){
        $(".hover-2" ). mouseenter(function() {
            $("#hov-h3-hov-2").animate({"margin-top": "20px"}, 1000);
            $("#hov-p-hov-2").animate({"margin-top": "20px"}, 1000);
            $("#hover-circ-hov-2").animate({"margin-top": "0"}, 1000);
        }).mouseout(function() {
            $("#hov-h3-hov-2").css("margin-top", "-100px");
            $("#hov-p-hov-2").css("margin-top", "-100px");
            $("#hover-circ-hov-2").css("margin-top", "500px");       
        });
    });
    $("#hov-h3-hov-3").css("margin-top", "-100px");
    $("#hov-p-hov-3").css("margin-top", "-100px");
    $("#hover-circ-hov-3").css("margin-top", "500px");
    $(document).ready(function(){
        $(".hover-3" ).mouseenter(function() {
            $("#hov-h3-hov-3").animate({"margin-top": "20px"}, 1000);
            $("#hov-p-hov-3").animate({"margin-top": "20px"}, 1000);
            $("#hover-circ-hov-3").animate({"margin-top": "0"}, 1000);
        }).mouseout(function() {
            $("#hov-h3-hov-3").css("margin-top", "-100px");
            $("#hov-p-hov-3").css("margin-top", "-100px");
            $("#hover-circ-hov-3").css("margin-top", "500px");       
        });
    });
    $("#hov-h3-hov-4").css("margin-top", "-100px");
    $("#hov-p-hov-4").css("margin-top", "-100px");
    $("#hover-circ-hov-4").css("margin-top", "500px");
    $(document).ready(function(){
        $(".hover-4" ).mouseenter(function() {
            $("#hov-h3-hov-4").animate({"margin-top": "20px"}, 1000);
            $("#hov-p-hov-4").animate({"margin-top": "20px"}, 1000);
            $("#hover-circ-hov-4").animate({"margin-top": "0"}, 1000);
        }).mouseout(function() {
            $("#hov-h3-hov-4").css("margin-top", "-100px");
            $("#hov-p-hov-4").css("margin-top", "-100px");
            $("#hover-circ-hov-4").css("margin-top", "500px");       
        });
    });
    $("#hov-h3-hov-5").css("margin-top", "-100px");
    $("#hov-p-hov-5").css("margin-top", "-100px");
    $("#hover-circ-hov-5").css("margin-top", "500px");
    $(document).ready(function(){
        $(".hover-5" ).mouseenter(function() {
            $("#hov-h3-hov-5").animate({"margin-top": "20px"}, 1000);
            $("#hov-p-hov-5").animate({"margin-top": "20px"}, 1000);
            $("#hover-circ-hov-5").animate({"margin-top": "0"}, 1000);
        }).mouseout(function() {
            $("#hov-h3-hov-5").css("margin-top", "-100px");
            $("#hov-p-hov-5").css("margin-top", "-100px");
            $("#hover-circ-hov-5").css("margin-top", "500px");       
        });
    });
    $("#hov-h3-hov-6").css("margin-top", "-100px");
    $("#hov-p-hov-6").css("margin-top", "-100px");
    $("#hover-circ-hov-6").css("margin-top", "500px");
    $(document).ready(function(){
        $(".hover-6" ).mouseenter(function() {
            $("#hov-h3-hov-6").animate({"margin-top": "20px"}, 1000);
            $("#hov-p-hov-6").animate({"margin-top": "20px"}, 1000);
            $("#hover-circ-hov-6").animate({"margin-top": "0"}, 1000);
        }).mouseout(function() {
            $("#hov-h3-hov-6").css("margin-top", "-100px");
            $("#hov-p-hov-6").css("margin-top", "-100px");
            $("#hover-circ-hov-6").css("margin-top", "500px");       
        });
    });
})