// calixo888

let canvasDiv = document.querySelector("#anojs-falling-circles");

canvasDiv.innerHTML += "<canvas id='anojs-falling-circles-canvas'></canvas>";

let canvas = document.querySelector("#anojs-falling-circles-canvas");

const c = canvas.getContext('2d');

canvas.style.width = '100%';
canvas.style.height = '100%';

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const mouse = {
    x: undefined,
    y: undefined
};

let customColors = ['ANOJS_COLOR_1', 'ANOJS_COLOR_2', 'ANOJS_COLOR_3'];

// Event Listeners
addEventListener('mousedown', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('mouseup', () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

addEventListener("resize", () => {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
});

// Objects
class Ball {
    constructor(x, y, dx, dy, radius, colorIndex) {
        this.x = x;
        this.y = y;
        this.origY = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.colorIndex = colorIndex;
        this.gravity = 1;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = customColors[this.colorIndex];
        c.strokeStyle = customColors[this.colorIndex];
        c.stroke();
        c.fill();
    }

    update() {
        if (this.y + this.radius + this.dy >= innerHeight || this.y + this.radius + this.dy <= this.origY) {
            this.dy = -this.dy * 0.8;
            this.dx = this.dx * 0.95;
        } else {
            this.dy += this.gravity;
        }

        if (this.x + this.radius + this.dx >= innerWidth || this.x + this.radius + this.dx <= 0) {
            this.dx = -this.dx * 0.8;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

var balls = [];

function init() {
    for (let i = 0; i < 400; i++) {
        var x = Math.random() * innerWidth;
        var y = Math.random() * (innerHeight - 200);
        var dx = (Math.random() - 0.5) * 20;
        var dy = Math.random() * 5;
        var radius = 30;
        var colorIndex = Math.floor(Math.random() * customColors.length);
        var ball = new Ball(x, y, dx, dy, radius, colorIndex);
        balls.push(ball);
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => {
        ball.update();
    });
}

init();
animate();
