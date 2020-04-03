# Formatting Ano.js animations
In order to properly contribute animations to Ano.js, your animations must be properly formatted towards Ano.js standards. So this is a guide on how to format your animations.

## General formatting rules
1. The animation JS file must be placed in the `/animation-files/` directory
2. The filename of the JS file must follow this format:<br/>
    `anojs-[rest of animation name separated by dashes].js`<br/>
    Example: `anojs-falling-circles.js`
3. It is most convenient if you could take a full-page screenshot of your animation in the works, and place it in the `/animation-images/` directory. The filename of this file must be the same as the JS file but with a `.png` extension<br/>
    Example: `anojs-falling-circles.png`

## HTML5 Canvas formatting rules
If your animation is built with HTML5 Canvas, you must also follow these rules:
1. All HTML5 canvas animations pull from a div formatted this way:<br/>
    `<div id="anojs-[animation-filename]"></div>`<br/>
    So, all animations must grab this div like this: `let canvasDiv = document.getElementById('anojs-matrix-rain');`
2. Using the `canvasDiv` variable, you must inject a canvas into it with a certain ID like this:<br/>
    `canvasDiv.innerHTML += "<canvas id='anojs-[animation-filename]-canvas'></canvas>"`<br/>
    Example: `canvasDiv.innerHTML += "<canvas id='anojs-matrix-rain-canvas'></canvas>";`
3. Then, you must grab this canvas by ID and then you can use it like this:<br/>
    `let canvas = document.getElementById('anojs-[animation name]-canvas');`<br/>
    Example: `let canvas = document.getElementById('anojs-matrix-rain-canvas');`

## Codestyle formatting rules
1. All code should be written in camelCase style.
2. Curly braces on same line as statement.

**Again, thank you for contributing animations, and don't hestiate to reach out on Slack for help on formatting your animations!**