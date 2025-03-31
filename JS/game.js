function drawIt() {
    let x = 150;
    let y = 150;
    let dx = 2;
    let dy = 4;
    let ctx;
    let canvas;
    let rightDown = false;
    let leftDown = false;

    //nastavljanje leve in desne tipke
    function onKeyDown(evt) {
        if (evt.keyCode == 39)
            rightDown = true;
        else if (evt.keyCode == 37) 
            leftDown = true;
    }

    function onKeyUp(evt) {
        if (evt.keyCode == 39)
            rightDown = false;
        else if (evt.keyCode == 37) 
            leftDown = false;
    }

    function init() {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        return setInterval(draw, 10); //klic funkcije draw vsakih 10 ms; http://www.w3schools.com/jsref/met_win_setinterval.asp
    }
    function init_paddle() {
        paddlex = canvas.width / 2;
        paddleh = 10;
        paddlew = 75;
    }
    function draw() {
        // risanje
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2, true);
        init_paddle();
        ctx.rect(paddlex, canvas.height - paddleh, paddlew, paddleh);
        ctx.closePath();
        ctx.fill();
        
        if (rightDown) 
            paddlex += 5;
        else if (leftDown) 
            paddlex -= 5;

        if (x + dx > canvas.width - 7 || x + dx < 0 + 7)
            dx = -dx;
        if (y + dy > canvas.height || y + dy < 0)
            dy = -dy;

        x += dx;
        y += dy;
    }
    init();
}