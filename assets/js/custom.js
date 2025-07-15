// FOR TYPED JS SECTION

document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.typed', {
      strings: ["UI Designer.", "UI Developer.", "Web Developer.", "Shopify Developer."],
      stringsElement: null,
      typeSpeed: 60,
      startDelay: 1000,
      backSpeed: 20,
      backDelay: 500,
      loop: true,
      loopCount: 5,
      showCursor: false,
      cursorChar: "|",
      attr: null,
      contentType: 'html',
    });
  });

  

  // DISABLE RIGHT CLICK SCRIPT

  document.addEventListener('contextmenu',(e)=>{
      e.preventDefault();
    }
    );
    document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }

  //DISABLE CONTENT COPY PASTE SCRIPT

  $(document).ready(function () {
      $('body').bind('cut copy paste', function (e) {
          e.preventDefault();
      });
      $("body").on("contextmenu",function(e){
          return false;
      });
  });



//   REVIEW SLIDER SCRIPT

$(document).ready(function () {
    $('.reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        nav: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
