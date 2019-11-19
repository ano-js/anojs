let canvasDiv = document.querySelector("#anojs-falling-circles")

canvasDiv.innerHTML += "<canvas id='anojs-falling-circles-canvas'></canvas>"

let canvas = document.querySelector("#anojs-falling-circles-canvas")

const c = canvas.getContext('2d')

var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: undefined,
  y: undefined
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousedown', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('mouseup', (event) => {
  mouse.x = undefined
  mouse.y = undefined
})
addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

addEventListener("resize", () => {
  innerWidth = window.innerWidth
  innerHeight = window.innerHeight
})

// Objects
class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.origY = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
    this.gravity = 1;
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.strokeStyle = "black";
    c.stroke();
    c.fill()
  }

  update() {
    if (this.y + this.radius + this.dy >= innerHeight || this.y + this.radius + this.dy <= this.origY) {
      this.dy = -this.dy * 0.8
      this.dx = this.dx * 0.95
    }
    else {
      this.dy += this.gravity
    }

    if (this.x + this.radius + this.dx >= innerWidth || this.x + this.radius + this.dx <= 0) {
      this.dx = -this.dx * 0.8
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw()
  }
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Implementation
var balls = []
function init() {
  for (let i = 0; i < 400; i++) {
    var x = Math.random() * innerWidth;
    var y = Math.random() * (innerHeight - 200);
    var dx = (Math.random() - 0.5) * 20;
    var dy = Math.random() * 5;
    var radius = 30;
    var color = colors[Math.floor(Math.random() * colors.length)];
    var ball = new Ball(x, y, dx, dy, radius, color);
    balls.push(ball);
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  balls.forEach(ball => {
   ball.update()
  })
}

init()
animate()
