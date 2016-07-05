$(document).ready(function(){

  // Parallax Functions

  var headerContainerHeight = $('.header-container').height();

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if (wScroll <= headerContainerHeight) {
      $('.header-container .logo').css({
        'transform' : 'translate(0px, '+ wScroll /8 +'%)'
      });
    };

    if(wScroll > headerContainerHeight) {
      $('header .nav').addClass('visible')
    };

    if(wScroll < headerContainerHeight) {
      $('header .nav').removeClass('visible')
    };

    if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
      $('.clothes-pics figure').each(function(i){
        setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('is-showing');
        }, 150 * (1+i));
      });
    };

    if(wScroll > $('.large-window').offset().top - ($(window).height())) {
      $('.large-window').css({
        'background-position':'center '+ wScroll +'px'
      });
    };

    $('a[href="#buy"]').click(function(){
      $('body').scrollTop(400)
    }, 700);

  });

  // Normal Functions
  $('.nav .open-menu').click(function(){
    $('#navigation-mobile').addClass('is-open');
    $('body').addClass('grayscale');
  });

  $('.nav .close-menu').click(function(){
    $('#navigation-mobile').removeClass('is-open');
    $('body').removeClass('grayscale');
  });

});
