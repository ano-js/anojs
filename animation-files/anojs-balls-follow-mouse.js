// vplentinax

let canvasDiv = document.getElementById('anojs-balls-follow-mouse');

canvasDiv.innerHTML += "<canvas id='anojs-balls-follow-mouse-canvas'></canvas>";

let canvas = document.getElementById('anojs-balls-follow-mouse-canvas');
let context = canvas.getContext('2d');

console.log(canvas);

let styleTag = document.createElement("style");
document.head.appendChild(styleTag);
styleTag.innerText = 'canvas {background-color: black;}'


let mouse = {
  x: innerWidth,
  y: innerHeight
}

window.addEventListener('mousemove', function(event) {
  mouse.x = event.clientX || event.pageX;
  mouse.y = event.clientY || event.pageY;
});

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

var arrColor = [
  '#EFC7C2 ',
  '#ACE4AA',
  '#C3DFE0',
  '#EFC7C2',
  '#ACE4AA',
  '#C3DFE0',
  '#EFC7C2',
  '#ACE4AA',
  '#C3DFE0',
  '#ACE4AA',
  '#EFC7C2'
];

let arrCircle = [];
let nx = 0.125;
let ny = 0.125;

function init() {
  arrCircle = [];

  for (var i = 0; i < arrColor.length; i++) {
    let x = void 0;
    let dx = void 0;
    let y = void 0;
    let dy = void 0;
    nx -= 0.028 / 3;
    ny -= 0.028 / 3;
    arrCircle.unshift(new Circle(x, y, dx, dy, nx, ny, arrColor[i]));
  }
};

function Circle(x, y, dx, dy, nx, ny, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.nx = nx;
  this.ny = ny;
  this.color = color;

  this.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, 12, 0, Math.PI * 2, false);
    context.strokeStyle = color;
    context.closePath();
  }

  this.update = function() {

    if (!this.x || !this.y) {
      this.x = mouse.x;
      this.y = mouse.y;
    } else {
      this.dx = (mouse.x - this.x) * this.nx;
      this.dy = (mouse.y - this.y) * this.ny;
      if (Math.abs(this.dx) + Math.abs(this.dy) < 0.1) {
        this.x = mouse.x;
        this.y = mouse.y;
      } else {
        this.x += this.dx * 2;
        this.y += this.dy * 2;
        context.stroke();
      }
    }
    this.draw();
  }
};

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < arrCircle.length; i++) {
    arrCircle[i].update();
  }

};
init();
animate();
