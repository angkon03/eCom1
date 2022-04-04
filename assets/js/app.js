$('.has-mega-menu').on('click', function(){
    $(this).children('.mega-menu').slideToggle(200);
    $(this).siblings('.has-mega-menu').children('.mega-menu').slideUp(100);
});

$('.mobile-menu-bars').on('click',function(){
    $('.main-menu-nav').slideToggle();
})
$('.close-btn').on('click',function(){
    $('.main-menu-nav').slideUp();
})