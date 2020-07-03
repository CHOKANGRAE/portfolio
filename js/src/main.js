// main.js

(function($){

  // viewBox item typing

  let viewText
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  async function writingAll (stringTarget, container){
    viewText = document.querySelector('['+container+']')
    const stringsContainer = document.getElementsByClassName(stringTarget)
      
    while(viewText){
      for (i=0; i <  stringsContainer.length ; i++){
        const string = stringsContainer[i].textContent
        await write(string)
        await sleep(1000)
        await erase()
        await sleep(1000)
      };
    }
  };

  async function write(text){    
    let index = 0
    while(index < text.length){
      const timeout = 100
      await sleep(timeout)
      index++
      viewText.innerHTML = text.substring(0, index)
    }
  };

  async function erase() {
    while(viewText.textContent.length){
      const timeout = 100
      await sleep(timeout)
      viewText.textContent = viewText.textContent.substring(0, viewText.textContent.length - 2)
    }
  };

  writingAll('item', 'data-text');

  // viewBox h2 typing 
  var typingBool = false; 
  var typingIdx=0; 
  var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     }  

  // infoBox 스크롤 시 변화되는 점
  // 1. info_title 움직임
  var infoBox = $('#infoBox');
  var infoH2 = infoBox.find('h2');
  var infoBg = infoBox.find('.info_title_box');

  $(document).on('scroll',function(){
    var doScroll = $(document).scrollTop();
    
    var ot= -doScroll/4;
    infoH2.css({'marginTop': ot * 0.7 + 'px'});
    infoBg.css({'marginTop':ot * 0.5 + 'px'});
  });

  // 스크롤 시 tabBox 고정 및 top 버튼 생성

  var topMvBtn = $('.topMvBtn');
  var timed = 500;

  $(window).on('scroll', function(){
  
  var winScroll = $(window).scrollTop();
  (winScroll >= 580) ? topMvBtn.stop().fadeIn(timed) : topMvBtn.stop().fadeOut(timed);
  
  });

})(jQuery);