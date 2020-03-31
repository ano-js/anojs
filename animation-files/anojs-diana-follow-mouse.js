// vplentinax

let canvasDiv = document.getElementById('anojs-diana-follow-mouse');

canvasDiv.innerHTML += "<canvas id='anojs-diana-follow-mouse-canvas'></canvas>";

let canvas = document.getElementById('anojs-diana-follow-mouse-canvas');
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
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
  '#D34F73',
  '#23395B',
  '#D34F73',
  '#23395B',
  '#D34F73',
  '#23395B',
  '#D34F73',
  '#23395B',
  '#D34F73',
  '#23395B'
];

var arrCircle = [];
var nx = 0.125;
var ny = 0.125;
var radius = 70;

function init() {
  arrCircle = [];

  for (var i = 0; i < arrColor.length; i++) {
    var x = void 0;
    var dx = void 0;
    var y = void 0;
    var dy = void 0;
    radius -=7;
    nx -= 0.022 / 2;
    ny -= 0.022 / 2;
    arrCircle.push(new Circle(x, y, dx, dy,nx,ny, radius,arrColor[i]));
  }
}

function Circle(x, y, dx, dy, nx, ny, radius, color) {
  /*-> Propiedaes <-*/
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.nx = nx;
  this.ny= ny;
  this.radius = radius;
  this.color = color;

  this.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, Math.abs(this.radius), 0, Math.PI * 2, false);
    context.fillStyle = color;
    context.fill();
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
        this.x += this.dx;
        this.y += this.dy;
      }
    }

    this.draw();
  }
}

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);


  for (var i = 0; i < arrCircle.length; i++) {
    arrCircle[i].update();
  }

}
init();
animate();
