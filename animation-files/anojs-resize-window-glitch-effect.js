//tsukisuperior
var squares = [];
let canvasDiv = document.getElementById("anojs-wandering-square");
canvasDiv.id = "anojs-wandering-square";
let canvas = document.getElementById("anojs-wandering-square");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
class Square {
    constructor() {
        this.x = rand(0, window.innerWidth);
        this.y = rand(0, window.innerHeight);
        this.width = rand(1, window.innerWidth);
        this.height = rand(1, window.innerHeight);
        context.shadowOffsetX = rand(0, window.innerWidth);
        context.shadowOffsetY = rand(0, window.innerHeight);
        context.shadowColor = "black";
        context.shadowBlur = 1000;
        context.fillStyle = context.createPattern(canvas, "repeat");
    }
}
function wanderingSquare() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var x = 0; x < squares.length; x++) {
        var dim = squares[x];
        context.fillRect(dim.x, dim.y, dim.width, dim.height);
        dim.x = Math.round((dim.x + Math.round(window.innerWidth / 2)) / 2) - dim.width;
        dim.y = Math.round((dim.y + Math.round(window.innerHeight / 2)) / 2) - dim.height;


    }
    
    squares.push(new Square);
    if (squares.length > 10) {
        squares.shift()

    }
    
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
setInterval(wanderingSquare, 15);
