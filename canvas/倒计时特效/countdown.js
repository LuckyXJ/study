var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

window.onload = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;

  // render(context);
  setInterval(
    function(){
      render( context );
      update();
    },1000);
  };
  function update(){
    // var nextShowTimeSeconds = time.getSeconds();
  }

  function render (ctx){
    /* 清除上一次渲染出的小球 */
    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    

    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10) ,ctx);
    renderDigit(MARGIN_LEFT + 15*(RADIUS + 1), MARGIN_TOP, parseInt(hours % 10), ctx);
    renderDigit(MARGIN_LEFT + 30*(RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(MARGIN_LEFT + 39*(RADIUS + 1), MARGIN_TOP, parseInt(minutes / 10), ctx);
    renderDigit(MARGIN_LEFT + 54*(RADIUS + 1), MARGIN_TOP, parseInt(minutes % 10), ctx);
    renderDigit(MARGIN_LEFT + 69*(RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(MARGIN_LEFT + 78*(RADIUS + 1), MARGIN_TOP, parseInt(seconds / 10), ctx);
    renderDigit(MARGIN_LEFT + 93*(RADIUS + 1), MARGIN_TOP, parseInt(seconds % 10), ctx);


  }

  function renderDigit(x, y ,num ,ctx) {
    var rgb = 'rgb('+Math.floor(Math.random()*255)+',' +Math.floor(Math.random()*255)+',' +Math.floor(Math.random()*255)+')';
    ctx.fillStyle = rgb;


    for(var i =0; i < digit[num].length ;i ++) {
      for (var j = 0; j < digit[num][i].length ; j ++)
      if(digit[num][i][j] == 1){
        ctx.beginPath();
        ctx.arc(x+j*2*(RADIUS+1)+(RADIUS+1) ,y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
        ctx.closePath();

        ctx.fill();
      }
    }
  } 