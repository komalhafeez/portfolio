

$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });


  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 500) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });
});

//type js

var typed = new Typed('#typed', {
  strings: ["Freelancer.", "Graphic Designer.", "Web Designer."],
  typeSpeed: 50,
    cursorChar: '|',
    backSpeed: 50,
    loop: true
});
         
var typed = new Typed('#typed2', {
  strings: ["Freelancing.", "Graphic Designing.", "Front-end Development."],
  typeSpeed: 30,
    backSpeed: 50,
    loop: true
});
    











//progress bar



  
    $(window).on ('load', function (){ // makes sure the whole site is loaded

          // ----------------------- 
        // Progress Bar--------------------
        // 
    $('.progress-bar').each(function(){
            var width = $(this).data('percent');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function() {
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50
                });
            });
        });


    });  //End On Load Function


$('.gallery-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  }); 

$('.gallery-item').click(function() {
	$(this).addClass('active-item').siblings().removeClass('active-item'); 
});


/*css selectpr*/

/*

*/
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
      
      var sectionOffset = $(this.hash).offset().top -70;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('computer');
        $(this).parent().siblings().removeClass('computer');
      }
    });
    
  });
  
});
