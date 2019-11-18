let canvasDiv = document.querySelector("#anojs-sine-waves")

canvasDiv.innerHTML += "<canvas id='anojs-sine-waves-canvas'></canvas>"

let canvas = document.querySelector("#anojs-sine-waves-canvas")

let innerWidth = window.innerWidth
let innerHeight = window.innerHeight

canvas.width = innerWidth
canvas.height = innerHeight

let c = canvas.getContext("2d")

let position = innerHeight / 2
let wavelength = 0.01
let frequency = 1
let amplitude = 100

let animate = () => {
  requestAnimationFrame(animate)
  c.fillStyle = "rgba(0,0,0,0.01)"
  c.fillRect(0, 0, innerWidth, innerHeight)

  for (var i = 0; i < 3; i++) {
    c.beginPath()
    c.moveTo(0, position)

    for (var j = 0; j < innerWidth; j++) {
      // y formula: [position] + Math.sin(i * [wavelength (decimal)] + [frequency]) * amplitude)
      c.lineTo(j, position + Math.sin(j * wavelength + frequency) * amplitude * Math.sin(frequency))
    }

    c.strokeStyle = "hsl(" + (Math.abs(100 * Math.sin(frequency)) + 100) + ", 50%, 50%)"

    c.stroke()
    frequency += .005
  }
}

animate()
