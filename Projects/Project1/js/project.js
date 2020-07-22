/*-------------team------------*/
$(function(){
  $("#team-members").owlCarousel({
        items:3,
      autoplay:true,
    smartspeed:700,
      loop:true
  });
});
/*-------------testimonial------------*/
$(document).ready(function() {
  $("#customers-testimonials").owlCarousel({
        items:1,
      autoplay:true,
    smartspeed:1200,
      loop:true,
       singleItem: true,
      dots: false
  });
});
/*----------------------------------counter------------------*/
$(document).ready(function() {
            $(".counter").counterUp({
                delay: 12,
                time: 2000
            });
        });
/*---------------------client-------------------*/
$(function(){
  $("#our-clients").owlCarousel({
        items:3,
      autoplay:true,
    smartspeed:700,
      loop:true
  });
});
/*------------------------ smooth scrolling--------------*/
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
      
      var sectionOffset = $(this.hash).offset().top;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})

