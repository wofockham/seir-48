// let id = 0; // global variable: bad
// const nextID = function () {
//   return id++;
// };

// Higher order function (accepts ore returns a function as data):
// const helloMaker = function () {
//   const greeting = 'Hello World'; // this variable persists through a closure.
//
//   return function () {
//     console.log(greeting); // 'Hello World'
//   };
// };
//
// const hey = helloMaker();
// hey(); // 'Hello World'

const nextIDMaker = function () {
  let id = 0; // local variable that persists through a closure

  return function () {
    return id++;
  };
};

const nextID = nextIDMaker();
nextID();
nextID();

// HTML Helper: (200 or so tags)
// const p = function (content) {
//   return `<p>${ content }</p>`;
// };
//
// const h1 = function (content) {
//   return `<h1>${ content }</h1>`;
// };
//
// const span = function (content) {
//   return `<span>${ content }</span>`;
// };

const tagMaker = function (tagName) {
  return function (content) {
    return `<${ tagName }>${ content }</${ tagName }>`;
  };
};

const p = tagMaker('p');
const h1 = tagMaker('h1');
const h2 = tagMaker('h2');
const h3 = tagMaker('h3');
const span = tagMaker('span');
