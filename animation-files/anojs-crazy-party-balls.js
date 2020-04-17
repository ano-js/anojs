// vplentinax

let canvasDiv = document.getElementById("anojs-crazy-party-balls");

canvasDiv.innerHTML += "<canvas id='anojs-crazy-party-balls-canvas'></canvas>";

let canvas = document.getElementById("anojs-crazy-party-balls-canvas");

let context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = color;
    context.fill();
  };

  this.update = function () {
    if (this.x + radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + radius > innerHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

let arrColor = [
  "ANOJS_COLOR_1",
  "ANOJS_COLOR_2",
  "ANOJS_COLOR_3",
  "ANOJS_COLOR_4",
  "ANOJS_COLOR_5",
  "ANOJS_COLOR_6",
  "ANOJS_COLOR_7",
  "ANOJS_COLOR_8 ",
  "ANOJS_COLOR_9",
  "ANOJS_COLOR_10",
  "ANOJS_COLOR_11",
  "ANOJS_COLOR_12",
  "ANOJS_COLOR_13",
  "ANOJS_COLOR_14",
  "ANOJS_COLOR_15",
  "ANOJS_COLOR_16",
  "ANOJS_COLOR_17",
  "ANOJS_COLOR_18"
];

let arrCircle = [];

function init() {
  arrCircle = [];
  for (var i = 0; i < 350; i++) {
    var radius = Math.random() * 10 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let dx = Math.random() - 5;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dy = Math.random() - 5;
    arrCircle.push(
      new Circle(
        x,
        y,
        dx,
        dy,
        Math.abs(radius + 5),
        arrColor[Math.floor(Math.random() * arrColor.length)]
      )
    );
  }
}

var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX || event.pageX;
  mouse.y = event.clientY || event.pageY;
});

window.addEventListener("resize", function () {
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
