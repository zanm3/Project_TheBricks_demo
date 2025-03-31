function drawIt() {
    let x = 150;
    let y = 150;
    let dx = 2;
    let dy = 4;
    let ctx;
    let canvas;
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

        if (x + dx > canvas.width - 10 || x + dx < 0 + 10)
            dx = -dx;
        if (y + dy > canvas.height || y + dy < 0)
            dy = -dy;

        x += dx;
        y += dy;

        let paddlex;
        let paddleh;
        let paddlew;
        ctx.rect(paddlex, canvas.height - paddleh, paddlew, paddleh);
    }
    init();
}