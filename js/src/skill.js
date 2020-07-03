// skill.js

(function($){



  var fromHidden = -90;

function topAlign(degrees) {
  return degrees - 45
};

function rotate(el, degrees) {
  var degrees = topAlign(degrees || 0);
  el.css('transform', 'rotate(' + degrees + 'deg)')
}

function circle(el, normalisedValue) {
  var degrees = normalisedValue * 360;
  var counter = 1;
  el.find('.arc_q').each(function() {
    var angle = Math.min(counter * 90, degrees); 
    rotate($(this), fromHidden + angle); 
    counter++; 
  });
  if (degrees > 90) { 
    el.find('.arc_cover').css('display', 'none');
  }
}

function animate(el, normalisedValue, current) {
  var current = current || 0;
  circle(el, current);
  if (current < normalisedValue) {
    current += 0.01;
    setTimeout(function() {
      animate(el, normalisedValue, current);
    }, 1);
  }
}

animate($('.circle_01'), 0.85);
animate($('.circle_02'), 0.80);
animate($('.circle_03'), 0.85);
animate($('.circle_04'), 0.95);
animate($('.circle_05'), 0.90);
animate($('.circle_06'), 0.65);
animate($('.circle_07'), 0.90);


})(jQuery);