// jabo-bernardo

canvasDiv = document.querySelector("#anojs-random-moving-squares");

canvasDiv.innerHTML += "<canvas id='anojs-random-moving-squares-canvas'></canvas>";

canvas = document.querySelector("#anojs-random-moving-squares-canvas");

canvas.style.width = '100%';
canvas.style.height = '100%';

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

c = canvas.getContext('2d');

randomColor = ['#757938', '#bc9b64', '#9db81c'];

class Square {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.dir = true;
        this.color = randomColor[Math.round(Math.random() * randomColor.length)];
    }
    Render() {
        c.fillStyle = this.color;
        c.fillRect(this.x - this.w / 2, this.y - this.w / 2, this.w, this.w);
    }
    Update() {
        if (this.w <= 1) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.color = randomColor[Math.round(Math.random() * randomColor.length)];
            this.dir = true;
        } else if (this.w > Math.random() * 64) {
            this.dir = false;
        }
        if (this.dir) {
            this.x += 0.5;
            this.y += 0.5;
            this.w += Math.random();
        } else {
            this.x += 0.25;
            this.y += 0.10;
            this.w -= 0.2;
        }
    }
}

squares = [];

Initialize = () => {
    for (i = 0; i < 500; i++) {
        squares.push(new Square(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 16));
    }
}

animation = setInterval(() => {
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (i = 0; i < squares.length; i++) {
        squares[i].Update();
        squares[i].Render();
    }
}, 1000 / 60)

Initialize();
