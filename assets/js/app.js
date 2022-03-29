$('.has-mega-menu').on('click', function(){
    $(this).children('.mega-menu').slideToggle(200);
    $(this).siblings('.has-mega-menu').children('.mega-menu').slideUp(100);
})