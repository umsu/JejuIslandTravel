/*첫 번째 섹션 ●클릭 시 사진이동!!********************************************/
$(function(){
  $('#top_img_01>#img_number>a:first-child').click(function(){
$("#top_img_01").css("background-image","url('images/주상절리01.jpg')");
  });
});
$(function(){
  $('#top_img_01>#img_number>a:nth-child(2)').click(function(){
$("#top_img_01").css("background-image","url('images/주상절리02.jpg')");
  });
});
$(function(){
  $('#top_img_01>#img_number>a:nth-child(3)').click(function(){
$("#top_img_01").css("background-image","url('images/주상절리03.jpg')");
  });
});

$(function(){
  $('#top_img_02>#img_number>a:first-child').click(function(){
$("#top_img_02").css("background-image","url('images/산방산01.jpg')");
  });
});
$(function(){
  $('#top_img_02>#img_number>a:nth-child(2)').click(function(){
$("#top_img_02").css("background-image","url('images/산방산02.jpg')");
  });
});
$(function(){
  $('#top_img_02>#img_number>a:nth-child(3)').click(function(){
$("#top_img_02").css("background-image","url('images/산방산03.jpg')");
  });
});
/*첫 번째 섹션 ●클릭 시 사진 이동!!********************************************/
/*두 번째 섹션 hove시 사진 확대!!********************************************/
$(function(){/*첫 번째 사진*/
  $('.container>.pichover_overflow:nth-child(1)').mouseenter(function(){
    $('.container>.pichover_overflow:nth-child(1) #hover_title').css("opacity", "1");
    $('#array_pic01').css("transform", "scale(1.1,1.1)");
    $('#array_pic01').css("transition", "0.5s");
  });
  $('.pichover_overflow').mouseleave(function(){
      $('.container>.pichover_overflow:nth-child(1) #hover_title').css("opacity", "0");
      $('#array_pic01').css("transform", "scale(1.0,1.0)");
  });
});
$(function(){/*두 번째 사진*/
  $('.container>.pichover_overflow:nth-child(2)').mouseenter(function(){
    $('.container>.pichover_overflow:nth-child(2) #hover_title').css("opacity", "1");
    $('#array_pic02').css("transform", "scale(1.1,1.1)");
    $('#array_pic02').css("transition", "0.5s");
  });
  $('.pichover_overflow').mouseleave(function(){
      $('.container>.pichover_overflow:nth-child(2) #hover_title').css("opacity", "0");
      $('#array_pic02').css("transform", "scale(1.0,1.0)");
  });
});
$(function(){/*세 번째 사진*/
  $('.container>.pichover_overflow:nth-child(3)').mouseenter(function(){
    $('.container>.pichover_overflow:nth-child(3) #hover_title').css("opacity", "1");
    $('#array_pic03').css("transform", "scale(1.1,1.1)");
    $('#array_pic03').css("transition", "0.5s");
  });
  $('.pichover_overflow').mouseleave(function(){
      $('.container>.pichover_overflow:nth-child(3) #hover_title').css("opacity", "0");
      $('#array_pic03').css("transform", "scale(1.0,1.0)");
  });
});
$(function(){/*네 번째 사진*/
  $('.container>.pichover_overflow:nth-child(4)').mouseenter(function(){
    $('.container>.pichover_overflow:nth-child(4) #hover_title').css("opacity", "1");
    $('#array_pic04').css("transform", "scale(1.1,1.1)");
    $('#array_pic04').css("transition", "0.5s");
  });
  $('.pichover_overflow').mouseleave(function(){
      $('.container>.pichover_overflow:nth-child(4) #hover_title').css("opacity", "0");
      $('#array_pic04').css("transform", "scale(1.0,1.0)");
  });
});
$(function(){/*다섯 번째 사진*/
  $('.container>.pichover_overflow:nth-child(5)').mouseenter(function(){
    $('.container>.pichover_overflow:nth-child(5) #hover_title').css("opacity", "1");
    $('#array_pic05').css("transform", "scale(1.1,1.1)");
    $('#array_pic05').css("transition", "0.5s");
  });
  $('.pichover_overflow').mouseleave(function(){
      $('.container>.pichover_overflow:nth-child(5) #hover_title').css("opacity", "0");
      $('#array_pic05').css("transform", "scale(1.0,1.0)");
  });
});
$(function(){/*여섯 번째 사진*/
  $('.container>.pichover_overflow:nth-child(6)').mouseenter(function(){
    $('.container>.pichover_overflow:nth-child(6) #hover_title').css("opacity", "1");
    $('#array_pic06').css("transform", "scale(1.1,1.1)");
    $('#array_pic06').css("transition", "0.5s");
  });
  $('.pichover_overflow').mouseleave(function(){
      $('.container>.pichover_overflow:nth-child(6) #hover_title').css("opacity", "0");
      $('#array_pic06').css("transform", "scale(1.0,1.0)");
  });
});
$(function(){/*일곱 번째 사진*/
  $('.container>.pichover_overflow:nth-child(7)').mouseenter(function(){
    $('.container>.pichover_overflow:nth-child(7) #hover_title').css("opacity", "1");
    $('#array_pic07').css("transform", "scale(1.1,1.1)");
    $('#array_pic07').css("transition", "0.5s");
  });
  $('.pichover_overflow').mouseleave(function(){
      $('.container>.pichover_overflow:nth-child(7) #hover_title').css("opacity", "0");
      $('#array_pic07').css("transform", "scale(1.0,1.0)");
  });
});
$(function(){/*여덟 번째 사진*/
  $('.container>.pichover_overflow:nth-child(8)').mouseenter(function(){
    $('.container>.pichover_overflow:nth-child(8) #hover_title').css("opacity", "1");
    $('#array_pic08').css("transform", "scale(1.1,1.1)");
    $('#array_pic08').css("transition", "0.5s");
  });
  $('.pichover_overflow').mouseleave(function(){
      $('.container>.pichover_overflow:nth-child(8) #hover_title').css("opacity", "0");
      $('#array_pic08').css("transform", "scale(1.0,1.0)");
  });
});
/*두 번째 섹션 hove시 사진 확대!!********************************************/
/*세 번째 섹션 ●클릭 시 사진 이동!!********************************************/
$(function(){
  $('#lodge_img01>#lodge_img_number>a:first-child').click(function(){
$("#lodge_img01").css("background-image","url('images/lodge04_01.jpg')");
  });
});
$(function(){
  $('#lodge_img01>#lodge_img_number>a:nth-child(2)').click(function(){
$("#lodge_img01").css("background-image","url('images/lodge04_02.jpg')");
  });
});
$(function(){
  $('#lodge_img01>#lodge_img_number>a:nth-child(3)').click(function(){
$("#lodge_img01").css("background-image","url('images/lodge04_03.jpg')");
  });
});
/***************************************************************************/
$(function(){
  $('#lodge_img02>#lodge_img_number>a:first-child').click(function(){
$("#lodge_img02").css("background-image","url('images/lodge05_01.jpg')");
  });
});
$(function(){
  $('#lodge_img02>#lodge_img_number>a:nth-child(2)').click(function(){
$("#lodge_img02").css("background-image","url('images/lodge05_02.jpg')");
  });
});
$(function(){
  $('#lodge_img02>#lodge_img_number>a:nth-child(3)').click(function(){
$("#lodge_img02").css("background-image","url('images/lodge05_03.jpg')");
  });
});
/*세 번째 섹션 ●클릭 시 사진 이동!!********************************************/
$(function(){
  $('#lodge_img03>#lodge_img_number>a:first-child').click(function(){
$("#lodge_img03").css("background-image","url('images/lodge06_01.jpg')");
  });
});
$(function(){
  $('#lodge_img03>#lodge_img_number>a:nth-child(2)').click(function(){
$("#lodge_img03").css("background-image","url('images/lodge06_02.jpg')");
  });
});
$(function(){
  $('#lodge_img03>#lodge_img_number>a:nth-child(3)').click(function(){
$("#lodge_img03").css("background-image","url('images/lodge06_03.jpg')");
  });
});
