
$(".gallery-list-item").click(function() {
    let value = $(this).attr("data-filter");
    if(value == "all") {
      $(".filter").show(300)
    } else {
      $(".filter").not("." + value).hide(300);
      $(".filter").filter("." + value).show(300);
    }
  }); 

$(".gallery-list-item").click(function() {
	$(this).addClass("active-item").siblings().removeClass("active-item"); 
});


/*--------------------menu---------------*/
$(document).ready(function(){
    $win = $(window);
    $navbar = $("#header");
    $toggle = $(".toggle-button");
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(){
        $navbar.toggleClass("toggle-left");
    })

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 700){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '5px'});
    }
}
});


var typed = new Typed('#typed', {
  strings: ["Freelancer.", "Graphic Designer.", "Web Designer."],
  typeSpeed: 30,
    backSpeed: 50,
    loop: true
});
         
var typed = new Typed('#typed2', {
  strings: ["Freelancing.", "Graphic Designing.", "Front-end Development."],
  typeSpeed: 30,
    backSpeed: 50,
    loop: true
});
    
/*------------------all------------------*/
$(document).ready(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    });
});


/*-----extra-------*/

