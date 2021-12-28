$( document ).ready(function() {
    // hamburger change Icon when open
    $(".navbar-toggler").click(function(){
       if($(".navbar-toggler").hasClass("collapsed")) {
           $(".navbar-toggler .svg-inline--fa").removeClass("fa-times");
           $(".navbar-toggler .svg-inline--fa").addClass("fa-th-list");
       }
       if(!$(".navbar-toggler").hasClass("collapsed")) {
        $(".navbar-toggler .svg-inline--fa").removeClass("fa-th-list");
        $(".navbar-toggler .svg-inline--fa").addClass("fa-times");
    }
       
      });

      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
});