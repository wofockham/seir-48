// Callbacks Review

// A callback function is a function typically PASSED TO another function.
// The callback function GETS CALLED FOR YOU, later, at some point in time.

// Javascript is asynchronous.

// Timers: A, C ... B
console.log('A');
setTimeout(function () {
  console.log('B: Time has passed');
}, 4000);
console.log('C');

// jQuery's document ready: I III ... II
console.log('I');
$(document).ready(function () {
  console.log('II: the document is ready');
});
console.log('III');

// Event handlers: Groucho Chico AND MAYBE LATER Harpo (and maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo: click');
});
console.log('Chico');

// .forEach loops
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// ES5
// for (let i = 0; i < colors.length; i++) {
//   console.log( colors[i] );
// }

// ES6
// colors.forEach(function (color) {
//   console.log(color);
// });

// You are not expected to understand this (yet)
const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction( someArray[i] );
  }
};

each(colors, function (c) {
  console.log(c);
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log(`${ brother } Marx`);
});

each('ajax', function (char) {
  console.log(char.toUpperCase());
});
