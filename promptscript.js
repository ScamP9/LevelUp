$(document).ready(function() {
    $(".button_order").click(function() {
        $('body, html').animate({
            scrollTop: $(".product_container").offset().top
        }, 200);
    });
});