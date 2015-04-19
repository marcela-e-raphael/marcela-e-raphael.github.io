$(function() {

  var winHeight = $(window).innerHeight();
  var mapContainer = $('#map');

  var applyHeightToMap = function(height) {
    mapContainer.innerHeight(height);
  };

  $(window).on('resize', function() {
    var height = $(this).innerHeight();
    applyHeightToMap(height);
  });

  applyHeightToMap(winHeight);

  mapContainer.on('click', function() {
    console.log($('#map__iframe'));
    $('#map__iframe').removeClass('map--scrolloff');
  });

  $('#map__iframe').mouseleave(function() {
    $('#map__iframe').addClass('map--scrolloff');
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});