//day62-1_script.js
$(function(){
      var swiper = new Swiper('.swiper-container', {
          navigation :{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},
          //밀리세콘 1000밀리초 = 1초
          speed : 500,
          //앞뒤로 보여질 아이템이 하나씩 추가 되는 개념
          loop :true
      });
});