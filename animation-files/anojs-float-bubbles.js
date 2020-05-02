// neilwave

let canvasDiv = document.getElementById('anojs-float-bubbles');

canvasDiv.innerHTML += "<canvas id='anojs-float-bubbles-canvas'></canvas>";

let canvas = document.getElementById('anojs-float-bubbles-canvas');
let context = canvas.getContext('2d');

let customColors = ["ANOJS_COLOR_1", "ANOJS_COLOR_2"];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.background = customColors[0];

let bubblesArr;

// bubbles
function Bubbles(x, y, dirX, dirY, size, color) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.size = size;
    this.color = color;
}
// draw method
Bubbles.prototype.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
}
Bubbles.prototype.update = function() {
    if(this.x + this.size > canvas.width || this.x - this.size < 0 ) {
        this.dirX =- this.dirX;
    }
    if(this.y + this.size > canvas.height || this.y - this.size < 0 ) {
        this.dirY =- this.dirY;
    }
    this.x += this.dirX;
    this.y += this.dirY;

    this.draw();
}
// create array
function init() {
    bubblesArr = [];

    for (let i = 0; i < 1000; i++) {
        let size = Math.random() * 8;
        let x = Math.random() * (innerWidth - size * 2);
        let y = Math.random() * (innerHeight - size * 2);
        let dirX = (Math.random() * 0.4) - 0.2;
        let dirY = (Math.random() * 0.4) - 0.2;
        let color = customColors[1];

        bubblesArr.push(new Bubbles(x, y, dirX, dirY, size, color));
    }
}
// animation
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (i = 0; i < bubblesArr.length; i++) {
        bubblesArr[i].update();
    }
}
init();
animate();
// resize listener
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
    }
);
