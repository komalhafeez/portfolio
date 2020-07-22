$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });

$(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 300) {
      $('#menu-bar').addClass('custom-navbar');
    } else {
      $('#menu-bar').removeClass('custom-navbar');
    }
  });
});


s