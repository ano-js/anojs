// trdavidt

let canvasDiv = document.querySelector("#anojs-particle-shower");
canvasDiv.innerHTML += "<canvas id='anojs-particle-shower-canvas'></canvas>";
let canvas = document.querySelector("#anojs-particle-shower-canvas");

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let context = canvas.getContext('2d');

let customColors = ["#296e85", "ANOJS_COLOR_2"];


window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  // particle constructor
  constructor(x, y, velocityX, velocityY, accelY, radius, color) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.accelY = accelY;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = customColors[0];
    context.fill();
  }

  update() {
    this.x += this.velocityX;
    this.velocityY += this.accelY;
    this.y += this.velocityY;

    if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
        this.velocityX = (-.5 * this.velocityX);
    }
  }
}

// create/fill array of particles
let particles = [];

function init() {
  for(i = 0; i < 1; i++) {
    let radius = Math.random() * 5;
    let x = Math.random() * (innerWidth - radius * 2);
    let y = -2 * radius;
    let velocityX = Math.random() * 0.3;
    let velocityY = Math.random() * 3;
    let accelY = 0.01;
    let color = customColors[0];

    particles.push(new Particle(x, y, velocityX, velocityY, accelY, radius, color));
  }
}

// animate particles
function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);

  for (i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }

  init();
  canvas.style.background = customColors[1];
}

animate();
