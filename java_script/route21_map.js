
var HOME_PATH = window.HOME_PATH || '.';
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(33.4969863,126.8973796),
    zoom: 7
});

makeMarker(map, new naver.maps.LatLng(33.5235571,126.8634054), 0);
makeMarker(map, new naver.maps.LatLng(33.5263737,126.8840526), 1);
makeMarker(map, new naver.maps.LatLng(33.524201,126.9028358), 2);
makeMarker(map, new naver.maps.LatLng(33.5184142,126.9012334), 3);
makeMarker(map, new naver.maps.LatLng(33.4993582,126.902222), 4);
makeMarker(map, new naver.maps.LatLng(33.4883563,126.9049977), 5);
makeMarker(map, new naver.maps.LatLng(33.4958552,126.9095782), 6);

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
