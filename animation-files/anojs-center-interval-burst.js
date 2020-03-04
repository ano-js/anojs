// calixo888

function centerBurst() {
  burst = new mojs.Burst(burstConstructor);
  burst2 = new mojs.Burst(burst2Constructor);
  burst3 = new mojs.Burst(burst3Constructor);
  burst4 = new mojs.Burst(burst4Constructor);
  burst5 = new mojs.Burst(burst5Constructor);
  burst6 = new mojs.Burst(burst6Constructor);
  circle = new mojs.Shape(circleConstructor);

  new mojs.Timeline().add(burst, burst2, burst3, burst4, burst5, burst6, circle).play();
}


const burstConstructor = {
  radius: { 0: 100 },
  angle: { 360: 0 },
  count: 20,
  children: {
    shape: "cross",
    stroke: "#22b3d4",
    strokeWidth: { 6: 0 },
    angle: { 360: 0 },
    radius: { 20: 10 },
    duration: 4000
  }
};

const burst2Constructor = {
  radius: { 0: 5 },
  count: 18,
  children: {
    shape: "circle",
    stroke: { "cyan": "orange" },
    opacity: { 1: 0 },
    fill: "none",
    strokeWidth: { 6: 0 },
    angle: { 0: 360 },
    radius: 10,
    duration: 4000
  }
};

const burst3Constructor = {
  radius: { 0: 50 },
  angle: { 0: 360 },
  count: 18,
  children: {
    shape: "circle",
    stroke: "#227bd4",
    opacity: { 1: 0 },
    fill: "none",
    strokeWidth: { 6: 0 },
    angle: { 0: 360 },
    radius: 10,
    duration: 4000
  }
};

const burst4Constructor = {
  radius: { 0: 75 },
  count: 6,
  children: {
    shape: "polygon",
    stroke: "#22d451",
    opacity: { 1: 0 },
    fill: "none",
    strokeWidth: { 10: 0 },
    angle: { 0: 720 },
    radius: { 20: 10 },
    duration: 4000
  }
};

const burst5Constructor = {
  radius: { 0: 300 },
  angle: { 180: 0 },
  count: 16,
  children: {
    shape: "polygon",
    fill: "#227bd4",
    opacity: { 1: 0 },
    angle: { 0: 720 },
    radius: { 20: 10 },
    duration: 4000
  }
};

const burst6Constructor = {
  radius: { 0: 500 },
  angle: { 0: 180 },
  count: 30,
  children: {
    shape: "zigzag",
    stroke: { "cyan": "orange" },
    opacity: { 1: 0 },
    fill: "none",
    strokeWidth: { 10: 0 },
    angle: { 0: 720 },
    radius: { 20: 10 },
    duration: 4000
  }
};

const circleConstructor = {
  radius: { 0: 800 },
  fill: "none",
  stroke: "#95f26d",
  duration: 4000,
  opacity: {1:0},
};

centerBurst();
setInterval(function() {
  centerBurst();
  $("#anojs-center-interval-burst").innerHTML = "";

  setTimeout(function() {
    for (mojsShape of document.querySelectorAll("[data-name=mojs-shape]")) {
      mojsShape.remove();
    }
  }, 3500);
}, 4000);
