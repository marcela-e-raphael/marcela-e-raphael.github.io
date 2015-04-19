$(document).ready(function() {

  var winHeight = $(window).innerHeight();
  var mapContainer = $('#map');
  var mapiFrame = $('#map__iframe');

  var applyHeightToMap = function(height) {
    mapContainer.innerHeight(height);
  };

  var loadMap = function(frame) {
    frame.src = 'https://www.google.com/maps/embed/v1/place?q=Oitava%20Igreja%20Presbiteriana%20de%20Belo%20Horizonte%20-%20Rua%20Nestor%20Soares%20de%20Melo%2C%20Palmares%2C%20Belo%20Horizonte%20-%20State%20of%20Minas%20Gerais%2C%20Brazil&key=AIzaSyCi21HehWT8SewsuY2PMV3POJCUWtgPra4';
  };

  var reloadMap = function(frame) {
    frame.src = frame.src;
  };

  $(window).on('resize', function() {
    var height = $(this).innerHeight();
    applyHeightToMap(height);
  });

  applyHeightToMap(winHeight);

  mapContainer.on('click', function() {
    mapiFrame.removeClass('map--scrolloff');
  });

  mapiFrame.mouseleave(function() {
    mapiFrame.addClass('map--scrolloff');
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

  $('.map--reload').click(function() {
    reloadMap(mapiFrame[0]);
  });


  loadMap(mapiFrame[0]);
});