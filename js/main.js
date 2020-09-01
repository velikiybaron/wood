$(document).ready(function () {
 window.addEventListener('scroll', function () {
   var headerMenu = document.querySelector('.header-menu');
   headerMenu.classList.toggle('sticky', window.scrollY > 50)
 })
 
 $('.burger-menu').click(function() {
   $('.menu').toggleClass('active');
 })

})
////// slider///////
$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});
jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  return this;
}


$(document).ready(function() {

$(".video1").css({
  "width"  : $("#player").css("width"),
  "height" : $("#player").css("height")
});

$(".button").click(function() {
  $(".video-wrapper").fadeIn('fast', function() {
    $(".video1").fadeIn(); 
    $(".video1").center(); 
  });
      
});

$(".video-wrapper").click(function(e) {
  if($(e.target).is(".video-wrapper")) {
    $(".video1").fadeOut(function() {
      $(".video-wrapper").fadeOut(function() {
       $(".video1, .video-wrapper").css({'display':'none'}); 
        var src=$("#player").attr("src");
        $("#player").attr("src", "");
        $("#player").attr("src", src);
      });
    });
  }
});

$(document).keyup(function(e) {
  var isShown=$(".video-wrapper").css("display");
  
  if(isShown !== "none" && e.which==27) {
     $(".video-wrapper").click(); 
  }
  
});

});