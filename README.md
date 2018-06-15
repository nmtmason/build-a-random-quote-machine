# [Build a Random Quote Machine](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/qRZeGZ.

## Solution

- Built using [React](https://reactjs.org/) and [create-react-app](https://github.com/facebook/create-react-app).
- The [forismatic](http://forismatic.com/en/api/) and [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview) API's are used to implement functionality.
- Inspired by [this dribble](https://dribbble.com/shots/1521733-Company-values-showcase).
- Functionality hinges on the `FetchQuote` container component. This queries the forismatic API and returns the result to its children. Loading and error states are handled and passed through this component.
