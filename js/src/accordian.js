// accordian.js

(function($){

  var accMenu = $('.accordian'); 
  var accSt01 = $('.accordian > dl');
  var accSt01_dt = accSt01.find('dt');
  var accSt01_dd = accSt01.find('dd');

  accSt01_dt.find('button').on('click', function(e){
    e.preventDefault();

    var dtPar = $(this).parent('dt');
    var thisPar = dtPar.next('dd');

    var thisView =  thisPar.css('display') === 'none';
  
    if( thisView ){
      accSt01_dd.stop().slideUp(500);
      thisPar.stop().slideDown(500);
      dtPar.addClass('action');
      dtPar.siblings('dt').removeClass('action');

    }else{
      accSt01_dd.stop().slideUp(500);
      accSt01_dt.removeClass('action');
    }
  
    $(this).parent('dt').next('dd').stop().slideDown(500);

    $(this).next();

  });

  accSt01_dt.find('button').on('mouseleave', function(e){
    e.preventDefault();

    accSt01_dd.stop().slideUp(500);
  })

})(jQuery);