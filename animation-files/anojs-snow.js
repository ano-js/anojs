// bbworld1

let canvasDiv = document.querySelector("#anojs-snow");
canvasDiv.innerHTML += "<canvas id='anojs-snow-canvas'></canvas>";
let canvas = document.querySelector("#anojs-snow-canvas");

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let ctx = canvas.getContext("2d");
ctx.lineCap = "round";

let particles = [];

class Particle {
    constructor(x) {
        this.x = x;
        this.y = -10;
        this.vx = Math.random() * -0.3;
        this.vy = Math.random() * 1;
        this.id = particles.length;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - this.vx * 5, this.y - this.vy * 5);
      ctx.lineWidth = 10;
      ctx.strokeStyle = "#eee";
      ctx.stroke();
    }
}


let customColors = [
  'ANOJS_COLOR_1',
  'ANOJS_COLOR_2',
  'ANOJS_COLOR_3',
  'ANOJS_COLOR_4',
]

function init() {
  drawBackground();
}

function drawBackground() {
  // Background
  let c = ctx;
  let innerWidth = canvas.width;
  let innerHeight = canvas.height;
  var grd = c.createLinearGradient(innerWidth / 2, 0, innerWidth / 2, innerHeight);
  grd.addColorStop(0, "#171e26");
  grd.addColorStop(1, "#3f586b");

  c.fillStyle = grd;
  c.fillRect(0, 0, innerWidth, innerHeight);

  // Stars
  c.shadowBlur = 5;
  c.shadowColor = "rgb(255, 255, 255)";
  c.fillStyle = "white";

  c.shadowColor = "rgba(255, 255, 255, 0)";

  // Ground
  c.beginPath();
  c.strokeStyle = "rgb(36, 35, 40)";
  c.fillStyle = "rgb(36, 35, 40)";
  c.moveTo(0, innerHeight - 110);
  c.lineTo(innerWidth, innerHeight - 110);
  c.lineTo(innerWidth, innerHeight);
  c.lineTo(0, innerHeight);
  c.lineTo(0, innerHeight - 110);
  c.stroke();
  c.fill();
  c.closePath();

  // Big Mountain
  c.strokeStyle = "#384551";
  c.fillStyle = "#384551";
  c.beginPath();
  c.moveTo(0, innerHeight - 110);
  c.lineTo(innerWidth / 2, 100);
  c.lineTo(innerWidth, innerHeight - 110);
  c.lineTo(0, innerHeight - 110);
  c.stroke();
  c.fill();
  c.closePath();

  // Medium Mountains
  c.strokeStyle = "#2b3843";
  c.fillStyle = "#2b3843";
  c.beginPath();
  c.moveTo(0, 400);
  c.lineTo(innerWidth / 4, 150);
  c.lineTo(innerWidth / 2, 400);
  c.lineTo(3 * innerWidth / 4, 150);
  c.lineTo(innerWidth, 400);
  c.lineTo(innerWidth, innerHeight - 110);
  c.lineTo(0, innerHeight - 110);
  c.stroke();
  c.fill();
  c.closePath();

  // Small Mountains
  c.strokeStyle = "#26333e";
  c.fillStyle = "#26333e";
  c.beginPath();
  c.moveTo(0, 500);
  c.lineTo(innerWidth / 6, 350);
  c.lineTo(innerWidth / 6 * 2, 500);
  c.lineTo(innerWidth / 6 * 3, 350);
  c.lineTo(innerWidth / 6 * 4, 500);
  c.lineTo(innerWidth / 6 * 5, 350);
  c.lineTo(innerWidth, 500);
  c.lineTo(innerWidth, innerHeight - 110);
  c.lineTo(0, innerHeight - 110);
  c.lineTo(0, 200);
  c.stroke();
  c.fill();
  c.closePath();
}

particles.push(new Particle(Math.floor(Math.random() * canvas.width * 2)));

function animate() {
  drawBackground();
  // Randomly generate particle
  //if (Math.random() > 0.5) {
  for (let i = 0; i < 1; i++) {
    particles.push(new Particle(Math.floor(Math.random() * canvas.width * 2)));
  }

  let forDeletion = [];
  let i = 0;
  for (let p of particles) {
    p.update();
    p.draw();
    if (p.y >= canvas.height + 10) forDeletion.push(i);
    i++;
  }

  for (let d of forDeletion) {
    particles.splice(d, 1);
  }

  if (particles.length > 1500) particles.splice(0, particles.length-1500);

  requestAnimationFrame(animate);
}

init();
animate();
