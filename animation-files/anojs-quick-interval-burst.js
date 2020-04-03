// calixo888

function randomBurst() {
    var randomCoords = {
        x: Math.random() * ((Math.random() * parentContainer.width() - (parentContainer.width() / 2))),
        y: Math.random() * ((Math.random() * parentContainer.height() - (parentContainer.height() / 2))),
    };

    burst = new mojs.Burst(burstConstructor).tune(randomCoords);
    burst2 = new mojs.Burst(burst2Constructor).tune(randomCoords);
    circle = new mojs.Shape(circleConstructor).tune(randomCoords);

    new mojs.Timeline().add(burst, burst2, circle).play();
}


const burstConstructor = {
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
};

const burst2Constructor = {
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
};

const circleConstructor = {
    radius: { 0: 400 },
    fill: "none",
    stroke: "teal",
    duration: 3000,
    opacity: { 1: 0 },
};

const parentContainer = $("#anojs-quick-interval-burst");

randomBurst();
setInterval(function() {
    randomBurst();
}, 500);