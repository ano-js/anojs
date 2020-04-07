let canvasDiv = document.querySelector("#anojs-night-sky");
canvasDiv.innerHTML += "<canvas id='anojs-night-sky-canvas'></canvas>";
let canvas = document.querySelector("#anojs-night-sky-canvas");

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let c = canvas.getContext("2d");

// Properties
let starCount = 1000;
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

    }

    update() {
        if(this.x < 0) {
            this.x = canvas.width;
        }

        this.x -= this.speed;

        if(this.color <= 0) {
            this.dir = 0;
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
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
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

    setColor(10, 10, 20);
    c.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < starCount; i++) {
        setColor(Math.random() * stars[i].color, stars[i].color, stars[i].color);
        stars[i].update();
        stars[i].render();
    }

    requestAnimationFrame(render);

}

// Misc
let setColor = function(r, g, b) {
    c.fillStyle = `rgb(${r}, ${g}, ${b})`;
}

let RandomBetween = function(min, max) {
    let rand  = Math.random() * max;
    while (rand < min) {
        rand  = Math.random() * max;
    }
    return rand;
}

// Initialize
init();
// Render
render();