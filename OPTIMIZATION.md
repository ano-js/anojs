# Optimizing Ano.js animations
In order to properly contribute animations to Ano.js, you must be able to optimize the animations before you make a pull request. So, this is a guide on how to optimize your animations properly.

## General optimization rules
1. The animation JS file must be placed in the `/animation-files/` directory
2. The filename of the JS file must follow this format:<br/>
    `anojs-[rest of animation name separated by dashes].js`<br/>
    Example: `anojs-falling-circles.js`
3. It is most convenient if you could take a full-page screenshot of your animation in the works, and place it in the `/animation-images/` directory. The filename of this file must be the same as the JS file but with a `.png` extension; Example: `anojs-falling-circles.png`

## HTML5 Canvas optimization rules
If your animation is built with HTML5 Canvas, you must also follow these rules:
1. All HTML5 canvas animations pull from a div formatted this way: `<div id="anojs-[animation-filename]"></div>`. So, all animations must grab this div like this: `let canvasDiv = document.getElementById('anojs-matrix-rain');`
2. Using the `canvasDiv` variable, you must inject a canvas into it with a certain ID like this: `canvasDiv.innerHTML += "<canvas id='anojs-[animation-filename]-canvas'></canvas>"; Example: `canvasDiv.innerHTML += "<canvas id='anojs-matrix-rain-canvas'></canvas>";`
3. Then, you must grab this canvas by ID and then you can use it like this: `let canvas = document.getElementById('anojs-[animation name]-canvas');`; Example: `let canvas = document.getElementById('anojs-matrix-rain-canvas');`

*Again, thank you for contributing animations, and don't hestiate to reach out on Slack for help on optimizing your animations!*
