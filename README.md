# [Build a Random Quote Machine](https://www.freecodecamp.com/challenges/build-a-random-quote-machine)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/ONjoLe/.
Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

1. User Story: I can click a button to show me a new random quote.
2. User Story: I can press a button to tweet out a quote.

## Solution

* Built using [Sass](http://sass-lang.com/) and [Normalize.css](https://necolas.github.io/normalize.css/).
* The [forismatic](http://forismatic.com/en/api/) and [Twitter](https://dev.twitter.com/web/tweet-button) API's  are used to implement functionality.
* Inspiration for style comes mainly from [Bootstrap](http://getbootstrap.com/).
* Vanilla JS is used in place of jQuery.
* Encountered difficulty in using the forismatic API because of CORS.
* Used JSONP to create a new script element each time a quote is requested.
* Found the ajax resources at [You Don't Need jQuery!](http://blog.garstasio.com/you-dont-need-jquery/ajax/) useful to understand CORS and JSONP in Vanilla JS.

## Development tools

The following tools were used in development:

* Yarn / npm scripts in package.json.
* [eslint](https://github.com/eslint/eslint) and [semistandard](https://github.com/Flet/semistandard) to lint JavaScript files.
* [node-sass](https://github.com/sass/node-sass) to compile Sass files to CSS.
* [browser-sync](https://github.com/Browsersync/browser-sync) to push CSS changes to the browser.
* [onchange](https://github.com/Qard/onchange) to implement watch functionality.
* [npm-run-all](https://github.com/mysticatea/npm-run-all) to run a series of Yarn / npm background scripts in parallel.

Inspiration taken from [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/) on [CSS-Tricks](https://css-tricks.com).
