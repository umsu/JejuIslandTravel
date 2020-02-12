$(function(){
  $('#button_01').click(function(){ //1번 버튼 클릭 (default)
  if($("#first_folder").css("opacity") == "1"){
  }
  else {//나머지 div OFF
$("#first_folder").css("opacity","1"); //ON
$("#second_folder").css("opacity","0"); //OFF
$("#third_folder").css("opacity","0"); //OFF
//구분선---------------------------
//second_folder의 css 변경
$('#folder_choice>ul>a:nth-child(2)>li').css("border-width","1px");
$('#folder_choice>ul>a:nth-child(2)>li').css("height","40px");
$('#folder_choice>ul>a:nth-child(2)>li').css("line-height","40px");
$('#folder_choice>ul>a:nth-child(2)>li').css("margin-top","0");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-bottom-width","2px");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-right-width","0px");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-left-width","0px");
//third_folder의 css 변경
$('#folder_choice>ul>a:nth-child(3)>li').css("border-width","1px");
$('#folder_choice>ul>a:nth-child(3)>li').css("height","40px");
$('#folder_choice>ul>a:nth-child(3)>li').css("line-height","40px");
$('#folder_choice>ul>a:nth-child(3)>li').css("margin-top","0");
$('#folder_choice>ul>a:nth-child(3)>li').css("border-bottom-width","2px");
$('#folder_choice>ul>a:nth-child(3)>li').css("border-left-width","1px");
//first_folder의 css 변경 폴더 div 크게------------------
$('#folder_choice>ul>a:first-child>li').css("border-width","2px");
$('#folder_choice>ul>a:first-child>li').css("height","48px");
$('#folder_choice>ul>a:first-child>li').css("line-height","48px");
$('#folder_choice>ul>a:first-child>li').css("margin-top","-7px");
$('#folder_choice>ul>a:first-child>li').css("border-bottom-width","0px");
$('#folder_choice>ul>a:first-child>li').css("border-right-width","2px");
$('#folder_choice>ul>a:first-child>li').css("border-left-width","2px");
//z-index 속성 변경!------------------
$('#first_folder').css("z-index","100");
$('#second_folder').css("z-index","10");
$('#third_folder').css("z-index","1");
    }
  });
});

$(function(){
  $('#button_02').click(function(){ //2번 버튼 클릭 (default)
  if($("#second_folder").css("opacity") == "1"){
  }
  else {//나머지 div OFF
$("#second_folder").css("opacity","1");
$("#first_folder").css("opacity","0");
$("#third_folder").css("opacity","0");
//구분선---------------------------
//first_folder의 css 변경
$('#folder_choice>ul>a:first-child>li').css("border-width","1px");
$('#folder_choice>ul>a:first-child>li').css("height","40px");
$('#folder_choice>ul>a:first-child>li').css("line-height","40px");
$('#folder_choice>ul>a:first-child>li').css("margin-top","0");
$('#folder_choice>ul>a:first-child>li').css("border-bottom-width","2px");
$('#folder_choice>ul>a:first-child>li').css("border-right-width","0px");
//third_folder의 css 변경
$('#folder_choice>ul>a:nth-child(3)>li').css("border-width","1px");
$('#folder_choice>ul>a:nth-child(3)>li').css("height","40px");
$('#folder_choice>ul>a:nth-child(3)>li').css("line-height","40px");
$('#folder_choice>ul>a:nth-child(3)>li').css("margin-top","0");
$('#folder_choice>ul>a:nth-child(3)>li').css("border-bottom-width","2px");
$('#folder_choice>ul>a:nth-child(3)>li').css("border-left-width","0px");
//second_folder의 css 변경 폴더 div 크게------------------
$('#folder_choice>ul>a:nth-child(2)>li').css("border-width","2px");
$('#folder_choice>ul>a:nth-child(2)>li').css("height","48px");
$('#folder_choice>ul>a:nth-child(2)>li').css("line-height","48px");
$('#folder_choice>ul>a:nth-child(2)>li').css("margin-top","-7px");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-bottom-width","0px");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-right-width","2px");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-left-width","2px");
//z-index 속성 변경!------------------
$('#first_folder').css("z-index","10");
$('#second_folder').css("z-index","100");
$('#third_folder').css("z-index","1");
    }
  });
});

$(function(){
  $('#button_03').click(function(){ //3번 버튼 클릭 (default)
  if($("#third_folder").css("opacity") == "1"){
  }
  else {//나머지 div OFF
$("#second_folder").css("opacity","0");
$("#first_folder").css("opacity","0");
$("#third_folder").css("opacity","1");
//구분선---------------------------
//first_folder의 css 변경
$('#folder_choice>ul>a:first-child>li').css("border-width","1px");
$('#folder_choice>ul>a:first-child>li').css("height","40px");
$('#folder_choice>ul>a:first-child>li').css("line-height","40px");
$('#folder_choice>ul>a:first-child>li').css("margin-top","0");
$('#folder_choice>ul>a:first-child>li').css("border-bottom-width","2px");
$('#folder_choice>ul>a:first-child>li').css("border-right-width","0px");
//second_folder의 css 변경
$('#folder_choice>ul>a:nth-child(2)>li').css("border-width","1px");
$('#folder_choice>ul>a:nth-child(2)>li').css("height","40px");
$('#folder_choice>ul>a:nth-child(2)>li').css("line-height","40px");
$('#folder_choice>ul>a:nth-child(2)>li').css("margin-top","0");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-bottom-width","2px");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-right-width","0px");
$('#folder_choice>ul>a:nth-child(2)>li').css("border-left-width","1px");
//third_folder의 css 변경 폴더 div 크게------------------
$('#folder_choice>ul>a:nth-child(3)>li').css("border-width","2px");
$('#folder_choice>ul>a:nth-child(3)>li').css("height","48px");
$('#folder_choice>ul>a:nth-child(3)>li').css("line-height","48px");
$('#folder_choice>ul>a:nth-child(3)>li').css("margin-top","-7px");
$('#folder_choice>ul>a:nth-child(3)>li').css("border-bottom-width","0px");
$('#folder_choice>ul>a:nth-child(3)>li').css("border-right-width","2px");
$('#folder_choice>ul>a:nth-child(3)>li').css("border-left-width","2px");
//z-index 속성 변경!------------------
$('#first_folder').css("z-index","1");
$('#second_folder').css("z-index","10");
$('#third_folder').css("z-index","100");
    }
  });
});
