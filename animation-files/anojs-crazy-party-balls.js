// vplentinax

let canvasDiv = document.getElementById('anojs-crazy-party-balls');

canvasDiv.innerHTML += "<canvas id='anojs-crazy-party-balls-canvas'></canvas>";

let canvas = document.getElementById('anojs-crazy-party-balls-canvas');

let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = color;
        context.fill();
    }

    this.update = function() {

        if (this.x + radius > innerWidth || this.x - radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

let arrColor = ['#502419', '#635380', '#D2BF55', '#9FFCDF', '#E9E3B4', '#C19875', '#F2E3BC',
    '#618985 ', '#D34F73', '#DB7F67', '#0EB1D2', '#7A9B76', 'lightblue',
    '#5A2328', '#CFBAE1', '#97F9F9', '#EEB868', '#456990'
];

let arrCircle = [];

function init() {
    arrCircle = [];
    for (var i = 0; i < 350; i++) {
        var radius = Math.random() * 10 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let dx = (Math.random() - 5);
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dy = (Math.random() - 5);
        arrCircle.push(new Circle(x, y, dx, dy, Math.abs(radius + 5), arrColor[Math.floor(Math.random() * arrColor.length)]));
    }
}

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.clientX || event.pageX;
    mouse.y = event.clientY || event.pageY;
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});


function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < arrCircle.length; i++) {
        arrCircle[i].update();
    }
}

init();
animate();