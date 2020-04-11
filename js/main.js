$(document).ready(function() {
    $('.main-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        dotsClass: 'main-slide-dot',
        fade: true  
    });
    // header slider

    // header slider learn more

    // header slider learn more

    // our story
    $('#story-more').on('click', function() {
        $('.story-card').toggleClass('story-card_more');
    });
    // our story

    // cite slider
    $('.cite-slider').slick({
        arrows: false,
        dots: true,
        initialSlide: 2,
        fade: true  
    });

    // adaptive header menu
    $('#burger').on('click', function() {
        $('.header__nav').toggleClass('show');
        $('#burger').toggleClass('burgerActive');
    });
});