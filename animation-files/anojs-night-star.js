// jabo-bernardo

let canvasDiv = document.querySelector("#anojs-night-star");
canvasDiv.innerHTML += "<canvas id='anojs-night-star-canvas'></canvas>";
let canvas = document.querySelector("#anojs-night-star-canvas");

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let c = canvas.getContext("2d");

// Properties
let starCount = 250;
let minimumStarSize = 1;
let maximumStarSize = 2;

class Star {
    constructor(x, y, rad, maxIntensity) {

        this.x = x;
        this.y = y;
        this.radius = rad;

        this.intensity = maxIntensity;
        this.color = 255 * maxIntensity;

        this.dir = 0;

        this.speed = 0.1;

        this.sides = RandomBetween(4, 12);

    }

    update() {
        if(this.x < 0) {
            this.x = canvas.width;

            this.speed = 0.1;
        }

        this.x -= this.speed;

        if(this.color <= 0) {
            this.dir = 0;

            this.sides = RandomBetween(5, 8);
            this.speed += 0.08;
        }

        if(this.color >= 255 * this.intensity) {
            this.dir = 1;
        }

        if(this.dir == 1) {
            this.color -= RandomBetween(0, 2);
        } else {
            this.color += RandomBetween(0, 2);
        }

    }

    render() {

        drawStar(this.x, this.y, this.sides, 2, 1, `rgb(${Math.random() * this.color}, ${this.color + 20}, ${this.color + 20})`);

    }
}

let stars = [];

// Initialization
let init = function() {

    for(let i = 0; i < starCount; i++) {
        stars.push(new Star( RandomBetween(0, canvas.width), RandomBetween(0, canvas.height), RandomBetween(minimumStarSize, maximumStarSize), RandomBetween(0.1, 1) ));
    }

}

// Visualization
let render = function() {

    c.fillStyle = "#000011"
    c.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < starCount; i++) {
        stars[i].update();
        stars[i].render();
    }

    requestAnimationFrame(render);

}

let RandomBetween = function(min, max) {
    let rand  = Math.random() * max;
    while (rand < min) {
        rand  = Math.random() * max;
    }
    return rand;
}

let drawStar = function(cx,cy,spikes,outerRadius,innerRadius, color) {
    var rot=Math.PI/2*3;
    var x=cx;
    var y=cy;
    var step=Math.PI/spikes;

    c.beginPath();
    c.moveTo(cx,cy-outerRadius)
    for(i=0;i<spikes;i++){
      x=cx+Math.cos(rot)*outerRadius;
      y=cy+Math.sin(rot)*outerRadius;
      c.lineTo(x,y)
      rot+=step

      x=cx+Math.cos(rot)*innerRadius;
      y=cy+Math.sin(rot)*innerRadius;
      c.lineTo(x,y)
      rot+=step
    }
    c.lineTo(cx,cy-outerRadius);
    c.closePath();
    c.lineWidth=5;
    c.strokeStyle=color;
    c.stroke();
    c.fillStyle=color;
    c.fill();
  }

// Initialize
init();
// Render
render();
