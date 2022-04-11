$('.has-mega-menu').on('click', function(){
    $(this).children('.mega-menu').slideToggle(200);
    $(this).siblings('.has-mega-menu').children('.mega-menu').slideUp(100);
});

$('.mobile-menu-bars>i').on('click',function(){
    $('.main-menu-nav').slideToggle();
})
$('.close-btn>i').on('click',function(){
    $('.main-menu-nav').slideUp();
})
// Banner Slider
$('.slider').slick({
    autoplay: true,
    dots: true,
});
// counter
$('.counter').counterUp({
    delay: 10,
    time: 1000,
});
