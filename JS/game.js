function drawIt() {
    var x = 150;
    var y = 150;
    var dx = 2;
    var dy = 4;
    var ctx;
    var canvas
    function init() {

        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        return setInterval(draw, 10); //klic funkcije draw vsakih 10 ms; http://www.w3schools.com/jsref/met_win_setinterval.asp
    }
    function draw() {
        ctx.clearRect(0, 0, 300, 300);
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        x += dx;
        y += dy;
    }
    init();
}

var paddlex;
var paddleh;
var paddlew;


function init_paddle() {
  paddlex = WIDTH / 2;
  paddleh = 10;
  paddlew = 75;
}

function drawPaddle() {
  clear();
  circle(x, y, 10);
  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

  if (x + dx > WIDTH-r || x + dx < 0+r)
    dx = -dx;

  if (y + dy < 0+r)
    dy = -dy;
  else if (y + dy > HEIGHT-r) {
    if (x > paddlex && x < paddlex + paddlew)
      dy = -dy;
    else
      clearInterval(intervalId);
  }

  x += dx;
  y += dy;
}
window.onload = init_paddle();

window.onload = drawPaddle();