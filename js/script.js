$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar").addClass("nav-scroll");
        $(".back_to_top").addClass("show_btn");
    } else {
        $(".navbar").removeClass("nav-scroll");
        $(".back_to_top").removeClass("show_btn");
    }
});



//electronics//
MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
    });





