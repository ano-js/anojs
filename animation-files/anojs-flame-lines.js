// jabo-bernardo

let canvasDiv = document.querySelector("#anojs-flame-lines");

canvasDiv.innerHTML += "<canvas id='anojs-flame-lines-canvas'></canvas>";

let canvas = document.querySelector("#anojs-flame-lines-canvas");

canvas.style.width = '100%';
canvas.style.height = '100%';

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let c = canvas.getContext("2d");

class Line {
    constructor() {
        this.Initialize();
    }

    Initialize() {
        this.x = -50;
        this.y = Math.random() * canvas.height;
        this.w = Math.random() * 64;
        this.h = this.w / 3;
        this.vel = Math.random() * 5;
        this.color = 'black';
        if(this.h <= 12)
            this.color = '#eb5334';
        else if(this.h > 12 && this.h < 16)
            this.color = '#eb9534';
        else if(this.h > 16)
            this.color = 'dbc81a';
    }

    Update() {

        if(this.x > canvas.width || this.h < 0) {
            this.Initialize();
        }

        this.x += this.vel;
        this.h -= 0.1;
        this.y += -Math.random() * 2;
    }

    Render() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
    }
}


let lines = [];

let Initialize = function() {
    for(var i = 0; i < 500; i++) {
        lines.push(new Line())
    }
}

let animation = setInterval(() => {
    c.clearRect(0, 0, canvas.width, canvas.height)
    for(var i = 0; i < lines.length; i++) {
        lines[i].Render();
        lines[i].Update();
    }


}, 1000/60)

Initialize();
