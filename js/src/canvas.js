
  var canvas = document.querySelector('.paper');
  var ctx = canvas.getContext('2d');

  var baseColor = "#FBD786";
  ctx.lineCap = 'round';
  ctx.strokeStyle = baseColor;
  ctx.font = "30px sans-serif";
  ctx.textAlign = 'center';
	ctx.fillStyle = baseColor;
	
	

  var MyGraph = function(x, y, p, s){		
		var posX = x;
		var posY = y;
		var percent = p ; 
		var skill = s;
		// var 
		
		var animationCircle;
		var i = 0;
		var CircleGraph = function(){
			animationCircle = function(percent){

				var lineWidth = 15; // 선 두께
				var r    = 90     // 반지름
				var rect = (r + lineWidth) * 2 + 10; //54
				ctx.lineWidth = lineWidth;
			
        var myP = function(percent){
          // percent  :  값 / 기준 * 100 -> 값 / 100 * 기준
          var p = (percent / 100 * 2) + 1.5;
          return Math.PI * p;
        };
        
        // 240은 (반지름 100과, 선두께 15) * 2 계산값보다 10큰 영역으로 설정
        ctx.clearRect(posX - (rect/2), posY - (rect/2), rect, rect);
        // = -?

			ctx.beginPath();
			ctx.arc(posX, posY, r , Math.PI * 1.5 , myP(percent), false);
      ctx.stroke();		
      
			ctx.textAlign = 'center';
      ctx.fillStyle = '#fff';
      
			ctx.font = "bold 25px sans-serif";
      ctx.fillText(skill, posX, posY);
      
			ctx.font = "20px sans-serif";
			ctx.fillText(percent+ '%', posX, posY+20);
		};

		i += 1;
		animationCircle( i );
		(i < percent) ? requestAnimationFrame(CircleGraph): 
										cancelAnimationFrame(CircleGraph);
	};
	CircleGraph();
}// MyGraph(x좌표, y좌표, percent, 스킬명);

MyGraph(200, 160, 90, 'PHOTOSHOP');
MyGraph(450, 160, 80, 'ILLUST');
MyGraph(700, 160, 95, 'INDESIGN');
MyGraph(950, 160, 95, 'HTML');
MyGraph(1200, 160, 80, 'CSS');
MyGraph(1450, 160, 75, 'JQUERY');
MyGraph(1700, 160, 90, 'OFFICE');