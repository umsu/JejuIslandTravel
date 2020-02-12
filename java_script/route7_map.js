
var HOME_PATH = window.HOME_PATH || '.';
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(33.2463159,126.5093222),
    zoom: 7
});

makeMarker(map, new naver.maps.LatLng(33.2390743, 126.5446754), 0);
makeMarker(map, new naver.maps.LatLng(33.2400361,126.5334171), 1);
makeMarker(map, new naver.maps.LatLng(33.2372853,126.5156888), 2);
makeMarker(map, new naver.maps.LatLng(33.2339671,126.5133968), 3);
makeMarker(map, new naver.maps.LatLng(33.2336099,126.4863398), 4);
makeMarker(map, new naver.maps.LatLng(33.2277971,126.4755673), 5);
makeMarker(map, new naver.maps.LatLng(33.2342793,126.4636309), 6);
makeMarker(map, new naver.maps.LatLng(37.3618025, 127.1153248), 7);

function makeMarker(map, position, index) {
    var marker = new naver.maps.Marker({
        map: map,
        position: position,
    });
    return marker;

}
/**
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
**/
