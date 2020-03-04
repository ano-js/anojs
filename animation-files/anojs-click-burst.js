// calixo888

// Importing Mo.js
var script = document.createElement("script");  // create a script DOM node
script.src = "https://cdnjs.cloudflare.com/ajax/libs/mo-js/0.288.2/mo.min.js";  // set its src to the provided URL
document.head.appendChild(script);


const burst = new mojs.Burst({
  radius: { 0: 100 },
  count: 20,
  children: {
    shape: "cross",
    stroke: "teal",
    strokeWidth: { 6: 0 },
    angle: { 360: 0 },
    radius: { 20: 10 },
    duration: 3000
  }
});

const burst2 = new mojs.Burst({
  radius: { 0: 300 },
  count: 18,
  children: {
    shape: "zigzag",
    stroke: { "cyan": "orange" },
    opacity: { 1: 0 },
    fill: "none",
    strokeWidth: { 6: 0 },
    angle: { 0: 360 },
    radius: { 20: 10 },
    duration: 3000
  }
});

const circle = new mojs.Shape({
  radius: { 0: 400 },
  fill: "none",
  stroke: "teal",
  duration: 3000,
  opacity: {1:0},
});

const timeline = new mojs.Timeline().add(burst, burst2, circle);


addEventListener("click", function(e) {
    var pageX = e.pageX;
    var pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

  const coords = { x: pageX - 675, y: pageY - 350 };

  burst.tune(coords);
  burst2.tune(coords);
  circle.tune(coords);

  timeline.replay();
})
