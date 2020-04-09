// vplentinax

let canvasDiv = document.getElementById("anojs-matrix-rain");

canvasDiv.innerHTML += "<canvas id='anojs-matrix-rain-canvas'></canvas>";

let canvas = document.getElementById("anojs-matrix-rain-canvas");
let context = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let textRain =
  "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑"; //letters that are used in the rain

textRain = textRain.split("");

let fontSize = 15;
let columns = canvas.width / fontSize;

let drops = [];

for (var x = 0; x < columns; x++) {
  drops[x] = 1;
}

let arrColor = [
  "ANOJS_COLOR_1",
  "ANOJS_COLOR_2",
  "ANOJS_COLOR_3",
  "ANOJS_COLOR_4",
  "ANOJS_COLOR_5",
  "ANOJS_COLOR_6",
  "ANOJS_COLOR_7",
  "ANOJS_COLOR_8",
  "ANOJS_COLOR_9",
  "ANOJS_COLOR_10",
  "ANOJS_COLOR_11",
  "ANOJS_COLOR_12",
  "ANOJS_COLOR_13",
  "ANOJS_COLOR_14",
  "ANOJS_COLOR_15",
  "ANOJS_COLOR_16",
  "ANOJS_COLOR_17",
  "ANOJS_COLOR_18",
];

function drawRain() {
  context.fillStyle = "ANOJS_COLOR_19";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = fontSize + "px arial";

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
