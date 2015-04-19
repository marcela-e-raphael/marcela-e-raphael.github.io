$(function() {

  var winHeight = $(window).innerHeight();
  var mapContainer = $('#map');

  var applyHeightToMap = function(height) {
    console.log(height);
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
});