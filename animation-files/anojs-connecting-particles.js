let canvasDiv = document.querySelector("#anojs-connecting-particles")

canvasDiv.innerHTML += "<canvas id='anojs-connecting-particles-canvas'></canvas>"

let canvas = document.querySelector("#anojs-connecting-particles-canvas")

let innerWidth = window.innerWidth
let innerHeight = window.innerHeight

canvas.width = innerWidth
canvas.height = innerHeight

let c = canvas.getContext("2d")

let mouse = {
  x: undefined,
  y: undefined
}

let closestParticle = undefined

// Event Listeners
addEventListener("click", (event) => {
  mouse.x = event.x
  mouse.y = event.y

  particles.forEach(particle => {
    // particle.centroid = false

    if (closestParticle == undefined) {
      closestParticle = particle
    }
    else if (distance(event.x, event.y, particle.x, particle.y) < distance(event.x, event.y, closestParticle.x, closestParticle.y)) {
      closestParticle = particle
    }
  })

  // closestParticle.centroid = true
})

addEventListener("resize", () => {
  innerWidth = window.innerWidth
  innerHeight = window.innerHeight
})

class Particle {
  constructor(x, y, dx, dy, radius, color, centroid) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
    this.centroid = centroid
  }

  draw() {
    if (this.centroid) {
      c.fillStyle = "rgba(0,0,0,0)"
    }
    else {
      c.fillStyle = this.color
    }
    c.shadowColor = "white"
    c.shadowBlur = 3
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fill()
    c.closePath()
    c.shadowBlur = 0
    c.shadowColor = "rgba(0,0,0,0)"
  }

  update(particles) {
    if (this.x + this.radius + this.dx >= innerWidth || this.x + this.radius + this.dx <= 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius + this.dy >= innerHeight || this.y + this.radius + this.dy <= 0) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy
    this.draw()

    if (this.centroid) {
      particles.forEach(particle => {
        c.beginPath()
        c.moveTo(this.x, this.y)
        c.lineTo(particle.x, particle.y)
        c.stroke()
        c.closePath()
      })
    }
  }
}

let distance = (x1, x2, y1, y2) => {
  return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
}

let particles = []

let init = () => {
  for (var i = 0; i < 200; i++) {
    let x = Math.random() * innerWidth
    let y = Math.random() * innerHeight
    let dx = (Math.random() - 0.5) * 2
    let dy = (Math.random() - 0.5) * 2
    let radius = 5
    let color = "white"

    let particle = new Particle(x, y, dx, dy, radius, color, false)
    particles.push(particle)
  }

  for (var i = 0; i < 1; i++) {
    particles[Math.floor(Math.random() * particles.length)].centroid = true
  }
}

let animate = () => {
  requestAnimationFrame(animate)
  // Background
  var grd = c.createLinearGradient(innerWidth / 2, 0, innerWidth / 2, innerHeight);
  grd.addColorStop(0, "#171e26");
  grd.addColorStop(1, "#3f586b");

  c.fillStyle = grd;
  c.fillRect(0, 0, innerWidth, innerHeight);

  particles.forEach(particle => {
    particle.update(particles)
  })
}

init()
animate()
