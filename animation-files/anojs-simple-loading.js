// g10ria

const NUM_DOTS = 3;
const DOTS_COLOR = 'rgb(85, 162, 165)';

const canvasDiv = document.querySelector("#anojs-simple-loading");
canvasDiv.style.position = 'fixed'; // Not sure if there's a cleaner way to add these styles
canvasDiv.style.height = '100vh';
canvasDiv.style.width = '100vw';
canvasDiv.style.display = 'flex';
canvasDiv.style.justifyContent = 'center';
canvasDiv.style.alignItems = 'center';
canvasDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
canvasDiv.style.transition = 'opacity .2s';
canvasDiv.style.opacity = '0';

var animation; // stores the animeJS instance

// Pauses and resets the animation
function stopAnimation() {
    if (!animation) return;
    animation.pause();
    animation.reset()
    canvasDiv.style.opacity = '0';
}

// Starts the loading animation and pauses it after a specified time
// @param time the time to load for, in milliseconds
function startLoadingWithTimer(time) {
    if (Number.isNaN(time)) return new Error("Please specify a valid time in milliseconds.")

    startLoading();
    setTimeout(stopAnimation, parseInt(time, 10));
}

// Starts the loading animation (for an indefinite period of time)
function startLoading() {
    canvasDiv.style.opacity = '100%';
    animation = anime({
        targets: 'div.block',
        translateY: [
            { value: -25, duration: 150, easing: 'easeOutSine' },
            { value: 0, duration: 200, easing: 'easeInSine' }
        ],
        delay: function (el, i, l) {
            return (i + 1) * 150 + 300
        },
        loop: true
    });
}

// Initializes needed divs
function init() {
    for (let i = 0; i < NUM_DOTS; ++i) {
        let div = document.createElement('div');
        div.classList.add('block');

        div.style['background-color'] = DOTS_COLOR;
        div.style.height = '20px';
        div.style.width = '20px';
        div.style.margin = '3px';
        div.style['border-radius'] = '50%';
        div.style.display = 'inline-block';

        canvasDiv.appendChild(div)
    }
}

init();
startLoading();
