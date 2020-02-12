
var HOME_PATH = window.HOME_PATH || '.';
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(33.2977306,126.2092574),
    zoom: 7
});

makeMarker(map, new naver.maps.LatLng(33.2731965, 126.2367837), 0);
makeMarker(map, new naver.maps.LatLng(33.2798862,126.1953132), 1);
makeMarker(map, new naver.maps.LatLng(33.2713297,126.1749956), 2);
makeMarker(map, new naver.maps.LatLng(33.2941619,126.1628505), 3);
makeMarker(map, new naver.maps.LatLng(33.2992852,126.1678181), 4);
makeMarker(map, new naver.maps.LatLng(33.3078768,126.1729882), 5);
makeMarker(map, new naver.maps.LatLng(33.3236697,126.1663068), 6);

function makeMarker(map, position, index) {
    var marker = new naver.maps.Marker({
        map: map,
        position: position,
    });
    return marker;

}


$(function(){
  $('#hover_title').mouseenter(function(){
    $('#array_pic01').css("transform", "scale(1.3,1.3)");
    $('#array_pic01').css("transition", "0.5s");
    $('#hover_title').css("opacity", "1");
    $('#hover_title').css("border-color", "white");
    $('#hover_title').css("border-style", "solid");
    $('#hover_title').css("border-width", "2px");
  });
  $('#hover_title').mouseleave(function(){
      $('#array_pic01').css("transform", "scale(1.0,1.0)");
      $('.pichover_overflow').css("border-width", "0px");
      $('#hover_title').css("opacity", "0");
  });
});
