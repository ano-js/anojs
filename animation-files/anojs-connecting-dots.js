// jabo-bernardo

let canvasDiv = document.querySelector("#anojs-connecting-dots");
canvasDiv.innerHTML += "<canvas id='anojs-connecting-dots-canvas'></canvas>";
let canvas = document.querySelector("#anojs-connecting-dots-canvas");

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let c = canvas.getContext("2d");

var dots_count = 200;

let dots = [];

let mouse = {
    x: 0,
    y: 0
}

class Dot {
    constructor(v, radius) {
        this.x = v.x;
        this.y = v.y;
        this.v = v;
        this.radius = radius;
        this.vx = Math.random() * 0.5;
        this.vy = Math.random() * 0.5;
        if(Math.random() < 0.5) {
            this.vx *= -1;
            this.vy *= -1;
        }
        this.id = dots.length;
    }

    Update() {
        this.v = new Vector2(this.x, this.y);

        if(this.x > canvas.width - this.radius) {
            this.vx *= -1;
        }
        if(this.x < 0) {
            this.vx *= -1;
        }
        if(this.y > canvas.height - this.radius) {
            this.vy *= -1;
        }
        if(this.y < 0) {
            this.vy *= -1;
        }

        this.x += this.vx;
        this.y += this.vy;

    }

    Render() {
        this.FindNearest();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
    }

    FindNearest() {
        for(var i = 0; i < dots_count; i++) {
            if(dots[i].id != this.id) {
                if(Vector2.Distance(this.v, dots[i].v) < canvas.width/10) {
                    c.beginPath();
                    c.moveTo(this.x, this.y)
                    c.lineTo(dots[i].x, dots[i].y)
                    c.lineWidth = 0.04;
                    c.strokeStyle = "rgba(255, 255, 255, 100)";
                    c.stroke();
                }
            }
        }
    }
}

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static Distance(v1, v2) {
        return Math.sqrt(Math.pow( v2.x - v1.x, 2 ) + Math.pow( v2.y - v1.y, 2));
    }

}

let Initialize = function() {

    // Initialize
    for(var i = 0; i < dots_count; i++) {
        dots.push(new Dot(new Vector2(Math.random() * canvas.width, Math.random() * canvas.height), 2));
    }
    // LOOP
    LOOP();

}

let LOOP = function() {

    Update();
    Render();
    requestAnimationFrame(LOOP);

}

let Render = function() {
    c.fillStyle = "#222";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "#FFF";
    for(var i = 0; i < dots.length; i++) {
        dots[i].Render();
    }
    for(var i = 0; i < dots_count; i++) {
            if(Vector2.Distance(new Vector2(mouse.x, mouse.y), dots[i].v) < 150) {
                c.beginPath();
                c.moveTo(mouse.x, mouse.y)
                c.lineTo(dots[i].x, dots[i].y)
                c.lineWidth = 0.05;
                c.strokeStyle = "white";
                c.stroke();
            }
    }
}

let Update = function() {
    for(var i = 0; i < dots.length; i++) {
        dots[i].Update();
    }
}

Initialize();

document.addEventListener('mousemove', e=> {

    mouse.x = e.clientX;
    mouse.y = e.clientY;

}, false);
