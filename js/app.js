// Set copyright dynamically
$(document).ready(function() {
  var date = new Date();
  $('.copyright').append(date.getFullYear());

  // Override scroll distances
  var overrideScroll = function(href, offset) {
    $('a.page-scroll[href="' + href + '"]').bind('click', function(event) {
      if ($(window).width() >= 768) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + offset
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
      }
    });
  }
  overrideScroll('#about', 100);
  overrideScroll('#clients', 200);
  overrideScroll('#services', 100);
  overrideScroll('#contact', 110);
});
