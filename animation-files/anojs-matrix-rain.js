// vplentinax


let canvasDiv = document.getElementById('anojs-matrix-rain');

canvasDiv.innerHTML += "<canvas id='anojs-matrix-rain-canvas'></canvas>";

let canvas = document.getElementById('anojs-matrix-rain-canvas');
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let textRain = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";

textRain = textRain.split("");

let fontSize = 15;
let columns = canvas.width / fontSize;

let drops = [];

for (var x = 0; x < columns; x++) {
  drops[x] = 1;
}

let arrColor = [
  '#502419',
  '#635380',
  '#D2BF55',
  '#9FFCDF',
  '#E9E3B4',
  '#C19875',
  '#F2E3BC',
  '#618985 ',
  '#D34F73',
  '#DB7F67',
  '#0EB1D2',
  '#7A9B76',
  'lightblue',
  '#5A2328',
  '#CFBAE1',
  '#97F9F9',
  '#EEB868',
  '#456990'
];


function drawRain() {

  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = fontSize + 'px arial';

  for (var i = 0; i < drops.length; i++) {
    context.fillStyle = arrColor[Math.floor(Math.random() * arrColor.length)];
    let text = textRain[Math.floor(Math.random() * textRain.length)];
    context.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;

  }
}
setInterval(drawRain, 45);
