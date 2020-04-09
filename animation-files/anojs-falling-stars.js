// calixo888

let canvasDiv = document.querySelector("#anojs-falling-stars");

canvasDiv.innerHTML += "<canvas id='anojs-falling-stars-canvas'></canvas>";

let canvas = document.querySelector("#anojs-falling-stars-canvas");

canvas.style.width = "100%";
canvas.style.height = "100%";

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let c = canvas.getContext("2d");

// Event Listeners
addEventListener("click", (event) => {
  let dx = (Math.random() - 0.5) * 5 + 2;
  let dy = 5;
  let radius = 10;
  let color = "ANOJS_COLOR_1";

  let star = new Star(event.x, event.y, dx, dy, radius, color);
  stars.push(star);
});

addEventListener("resize", () => {
  innerWidth = window.innerWidth;
  innerHeight = window.innerHeight;
});

class Star {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.origY = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.gravity = 1;
  }

  draw() {
    c.shadowBlur = 4;
    c.shadowColor = "ANOJS_COLOR_2";
    c.fillStyle = this.color;
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();

    c.shadowBlur = 0;
    c.shadowColor = "ANOJS_COLOR_3";
  }

  update() {
    if (
      this.y + this.radius + this.dy >= innerHeight - 100 ||
      this.y + this.radius + this.dy <= this.origY
    ) {
      this.dy = -this.dy * 0.8;
      this.radius -= 1;

      if (this.radius == 0) {
        stars.splice(stars.indexOf(this), 1);
      }

      for (var i = 0; i < this.radius / 2; i++) {
        miniStars.push(
          new MiniStar(this.x, innerHeight - 100, 2, "ANOJS_COLOR_4")
        );
      }
    } else {
      this.dy += this.gravity;
    }

    if (
      this.x + this.radius + this.dx >= innerWidth ||
      this.x + this.radius + this.dx <= 0
    ) {
      this.dx = -this.dx * 0.8;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

class MiniStar {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = (Math.random() - 0.5) * 20;
    this.dy = -((Math.random() + 0.5) * 10 + 10);
    this.radius = radius;
    this.color = color;
    this.gravity = 0.5;
  }

  draw() {
    c.fillStyle = "ANOJS_COLOR_5," + this.radius + ")";
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
  }

  update() {
    if (this.y + this.radius + this.dy >= innerHeight - 100) {
      this.dy = -this.dy * 0.8;
      this.radius -= 0.5;
      if (this.radius == 0) {
        miniStars.splice(miniStars.indexOf(this), 1);
      }
    } else {
      this.dy += this.gravity;
    }

    if (
      this.x + this.radius + this.dx >= innerWidth ||
      this.x + this.radius + this.dx <= 0
    ) {
      this.dx = -this.dx * 0.7;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

let stars = [];
let miniStars = [];

let xCoords = [];
let yCoords = [];

let init = () => {
  for (var i = 0; i < 1; i++) {
    let x = Math.random() * (innerWidth - 100) + 50;
    let y = 0;
    let dx = (Math.random() - 0.5) * 5 + 1;
    let dy = 5;
    let radius = 10;
    let color = "ANOJS_COLOR_6";

    let star = new Star(x, y, dx, dy, radius, color);
    stars.push(star);
  }

  for (var i = 0; i < 300; i++) {
    xCoords.push(Math.random() * (innerWidth - 25) + 12);
    yCoords.push(Math.random() * (innerHeight - 25) + 12);
  }
};

let drawBackground = () => {
  // Background
  var grd = c.createLinearGradient(
    innerWidth / 2,
    0,
    innerWidth / 2,
    innerHeight
  );
  grd.addColorStop(0, "ANOJS_COLOR_7");
  grd.addColorStop(1, "ANOJS_COLOR_8");

  c.fillStyle = grd;
  c.fillRect(0, 0, innerWidth, innerHeight);

  // Stars
  c.shadowBlur = 5;
  c.shadowColor = "ANOJS_COLOR_9";
  c.fillStyle = "ANOJS_COLOR_10";

  for (var i = 0; i < xCoords.length; i++) {
    let x = xCoords[i];
    let y = yCoords[i];

    c.beginPath();
    c.arc(x, y, 2, 0, Math.PI * 2, false);
    c.fill();
  }

  c.shadowColor = "ANOJS_COLOR_11";

  // Ground
  c.beginPath();
  c.strokeStyle = "ANOJS_COLOR_12";
  c.fillStyle = "ANOJS_COLOR_13";
  c.moveTo(0, innerHeight - 110);
  c.lineTo(innerWidth, innerHeight - 110);
  c.lineTo(innerWidth, innerHeight);
  c.lineTo(0, innerHeight);
  c.lineTo(0, innerHeight - 110);
  c.stroke();
  c.fill();
  c.closePath();

  // Big Mountain
  c.strokeStyle = "ANOJS_COLOR_14";
  c.fillStyle = "ANOJS_COLOR_15";
  c.beginPath();
  c.moveTo(0, innerHeight - 110);
  c.lineTo(innerWidth / 2, 100);
  c.lineTo(innerWidth, innerHeight - 110);
  c.lineTo(0, innerHeight - 110);
  c.stroke();
  c.fill();
  c.closePath();

  // Medium Mountains
  c.strokeStyle = "ANOJS_COLOR_16";
  c.fillStyle = "ANOJS_COLOR_17";
  c.beginPath();
  c.moveTo(0, 400);
  c.lineTo(innerWidth / 4, 150);
  c.lineTo(innerWidth / 2, 400);
  c.lineTo((3 * innerWidth) / 4, 150);
  c.lineTo(innerWidth, 400);
  c.lineTo(innerWidth, innerHeight - 110);
  c.lineTo(0, innerHeight - 110);
  c.stroke();
  c.fill();
  c.closePath();

  // Small Mountains
  c.strokeStyle = "ANOJS_COLOR_18";
  c.fillStyle = "ANOJS_COLOR_19";
  c.beginPath();
  c.moveTo(0, 500);
  c.lineTo(innerWidth / 6, 350);
  c.lineTo((innerWidth / 6) * 2, 500);
  c.lineTo((innerWidth / 6) * 3, 350);
  c.lineTo((innerWidth / 6) * 4, 500);
  c.lineTo((innerWidth / 6) * 5, 350);
  c.lineTo(innerWidth, 500);
  c.lineTo(innerWidth, innerHeight - 110);
  c.lineTo(0, innerHeight - 110);
  c.lineTo(0, 200);
  c.stroke();
  c.fill();
  c.closePath();
};

let animate = () => {
  requestAnimationFrame(animate);

  drawBackground();

  stars.forEach((star) => {
    star.update();
  });

  miniStars.forEach((miniStar) => {
    miniStar.update();
  });
};

init();
animate();
