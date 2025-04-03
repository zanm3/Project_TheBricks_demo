let bricks;
let NROWS;
let NCOLS;
let BRICKWIDTH;
let BRICKHEIGHT;
let PADDING;

function initbricks() { //inicializacija opek - polnjenje v tabelo
  NROWS = 5;
  NCOLS = 5;
  BRICKWIDTH = (canvas.width/NCOLS) - 1;
  BRICKHEIGHT = 15;
  PADDING = 1;
  bricks = new Array(NROWS);
  for (i=0; i < NROWS; i++) {
    bricks[i] = new Array(NCOLS);
    for (j=0; j < NCOLS; j++) {
      bricks[i][j] = 1;
    }
  }
}


function drawIt() {
    let x = 150;
    let y = 150;
    let dx = 2;
    let dy = 4;
    let ctx;
    let canvas;
    let rightDown = false;
    let leftDown = false;

    function init() {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        init_paddle();
        initbricks();
        return setInterval(draw, 10); //klic funkcije draw vsakih 10 ms; http://www.w3schools.com/jsref/met_win_setinterval.asp
    }
    function init_paddle() {
        paddlex = canvas.width / 2;
        paddleh = 10;
        paddlew = 75;
    }
    function onKeyDown(evt) {
        if (evt.keyCode == 39)
            rightDown = true;
        else if (evt.keyCode == 37) leftDown = true;
    }

    function onKeyUp(evt) {
        if (evt.keyCode == 39)
            rightDown = false;
        else if (evt.keyCode == 37) leftDown = false;
    }

    $(document).keydown(onKeyDown);
    $(document).keyup(onKeyUp);

    function draw() {
        // risanje
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2, true);
        ctx.rect(paddlex, canvas.height - paddleh, paddlew, paddleh);
        ctx.closePath();
        ctx.fill();

        if (rightDown) paddlex += 5;
        else if (leftDown) paddlex -= 5;

        if (x + dx > canvas.width - 6 || x + dx < 0 + 6)
            dx = -dx;

        if (y + dy > canvas.height || y + dy < 0)
            dy = -dy;
        else if (y + dy > canvas.height - 6) {
            if (x > paddlex && x < paddlex + paddlew) {
                dy = -dy;
            } else {
                clearInterval(intervalId); // Game over
            }
        }
        x += dx;
        y += dy;
    }
    const intervalId = init();
}