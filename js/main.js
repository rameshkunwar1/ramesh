
 
 /*==============================
      PRELOADER
    ==============================*/
    const preloader = document.querySelector("#preloader");
    const status = document.querySelector("#status");

    window.addEventListener('load', function() {
        preloader.style.display = "none";
        status.style.display = "none";

    })

     /*==============================
    END OF   PRELOADER
    ==============================*/


    /*==============================
    Animated navbar
    ==============================*/
    $(window).scroll(function(){
        if ($(document).scrollTop()>50) {
            $("nav").addClass("shrink");
        } else {
            $("nav").removeClass("shrink");
        }
    });



    AOS.init({
        useClassNames: false,
        initClassName: false,
        animatedClassName: 'animated',
      });

 
