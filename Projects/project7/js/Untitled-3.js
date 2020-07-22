// JavaScript Document
$(document).ready(function()
{
   $("#header,.info").ripples({
  dropRadius: 25,
  perturbance: 0.6,
  
}); 
    //navbar
    $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change');

  })

  //navbar

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 718) {
      $('.navbar').addClass('navbar-background')
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })
 

    //magnific popup
     $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      // options for gallery
      enabled: true
    }
  });
});


//smooth scroll
$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('Links');
        $(this).parent().siblings().removeClass('Links');
      }
    })
    
  })
  
})
