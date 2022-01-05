$(document).ready(function () {
    // hamburger change Icon when open
    $(".navbar-toggler").click(function () {
        if ($(".navbar-toggler").hasClass("collapsed")) {
            $(".navbar-toggler .svg-inline--fa").removeClass("fa-times");
            $(".navbar-toggler .svg-inline--fa").addClass("fa-th-list");
        }
        if (!$(".navbar-toggler").hasClass("collapsed")) {
            $(".navbar-toggler .svg-inline--fa").removeClass("fa-th-list");
            $(".navbar-toggler .svg-inline--fa").addClass("fa-times");
        }
    });

    var stop2Top = $('#stop2').offset().top
    var stop3Top = $('#stop3').offset().top
    var stop4Top = $('#stop4').offset().top
    var stop5Top = $('#stop5').offset().top
    var stop6Top = $('#stop6').offset().top
    var stop7Top = $('#stop7').offset().top
    var stop8Top = $('#stop8').offset().top

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }

        changeMenuOnScroll(scroll);
    });

    function changeMenuOnScroll(scroll) {
        $('.nav-item').removeClass('active')

        if (scroll > stop8Top) {
            $('.nav-item:nth-child(8)').addClass('active')
        } else if (scroll > stop7Top) {
            $('.nav-item:nth-child(8)').addClass('active')
        } else if (scroll > stop6Top) {
            $('.nav-item:nth-child(6)').addClass('active')
        } else if (scroll > stop5Top) {
            $('.nav-item:nth-child(5)').addClass('active')
        } else if (scroll > stop4Top) {
            $('.nav-item:nth-child(4)').addClass('active')
        } else if (scroll > stop3Top) {
            $('.nav-item:nth-child(3)').addClass('active')
        } else if (scroll > stop2Top) {
            $('.nav-item:nth-child(2)').addClass('active')
        } else {
            $('.nav-item:nth-child(1)').addClass('active')
        }
    }

    $('.nav-item').click(function () {
        $('.nav-item').removeClass('selected')
        $(this).addClass('selected')
    })
});