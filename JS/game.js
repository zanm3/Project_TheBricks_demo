let bricks = {};
let nrows = 5;
let ncols = 9;
let brickwidth = 110;
let brickheight = 20;
let padding = 1;

function initbricks() { //inicializacija opek - polnjenje v tabelož
    bricks = new Array(nrows);
    for (i = 0; i < nrows; i++) {
        bricks[i] = new Array(nrows);
        for (j = 0; j < ncols; j++) {
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
        ctx.arc(x, y, 7, 0, Math.PI * 2, true)
        ctx.closePath();
        ctx.fill();

        if (rightDown) paddlex += 5;
        else if (leftDown) paddlex -= 5;

        ctx.fillRect(paddlex, canvas.height - paddleh, paddlew, paddleh);

        for (i = 0; i < nrows; i++) {
            for (j = 0; j < ncols; j++) {
                if (bricks[i][j] == 1) {
                    ctx.fillRect((j * (brickwidth + padding)) + padding,
                        (i * (brickheight + padding)) + padding,
                        brickwidth, brickheight);
                }
            }
        }

        if (x + dx > canvas.width - 6 || x + dx < 0 + 6)
            dx = -dx;

        if (y + dy > canvas.height || y + dy < 0)
            dy = -dy;
        else if (y + dy > canvas.height - 6) {
            if (x > paddlex && x < paddlex + paddlew) {
                dy = -dy;
            } else {
                clearInterval(intervalId);
            }
        }
        x += dx;
        y += dy;
    }
    const intervalId = init();
}