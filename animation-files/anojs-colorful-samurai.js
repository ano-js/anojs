// jabo-bernardo

let canvasDiv = document.querySelector("#anojs-colorful-samurai");
canvasDiv.innerHTML += "<canvas id='anojs-colorful-samurai-canvas'></canvas>";
let canvas = document.querySelector("#anojs-colorful-samurai-canvas");

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let c = canvas.getContext("2d");

class MouseData {
    constructor() {
        this.mouseLastPosition = [];

        this.popCounter = 0;
    }

    update() {
        if(this.mouseLastPosition.length > 10) {
            this.mouseLastPosition.pop();
        }
    }

    render() {

        c.beginPath();
        if(this.mouseLastPosition[10] != undefined) {
            c.moveTo(this.mouseLastPosition[10].x, this.mouseLastPosition[10].y);
        }
        for(let i = 0; i < 10; i++) {
            if(this.mouseLastPosition[i] != undefined) {
                c.lineTo(this.mouseLastPosition[i].x,this.mouseLastPosition[i].y);
            }
        }
        c.fillStyle = "ANOJS_COLOR_1";
        c.fill();

    }
}

let mouse = new MouseData();

let animationLoop = function() {

    c.fillStyle = 'ANOJS_COLOR_2';
    c.fillRect(0, 0, canvas.width, canvas.height);

    mouse.update();
    mouse.render();

    requestAnimationFrame(animationLoop);

}

animationLoop();

document.addEventListener('mousemove', e => {

    let mousePos = getMousePosition(e);
    mouse.mouseLastPosition.unshift(mousePos);

}, false)


// Misc
let getMousePosition = function(e) {
    let cnv = canvas.getBoundingClientRect();
    return {
        x: e.clientX - cnv.left,
        y: e.clientY - cnv.top
    };
}

let Distance = function(x1, y1, x2, y2) {
    return Math.sqrt( Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) );
}
