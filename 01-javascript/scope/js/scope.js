
// The differences between var, let and const

// 0. const
// 1. let
// 2. (var)

// Scopes

// Global scope ////////////////////////////////////////////////////////////////
const globalMessage = 'Hello Cruel World';

const showGlobalMessage = function () {
  console.log( globalMessage ); // globalMessage is in the global scope.
};

showGlobalMessage(); // works
console.log('Still in scope', globalMessage);

// Function scope //////////////////////////////////////////////////////////////
const showLocalMessage = function () {
  const localMessage = 'Goodbye Cruel World';
  console.log( localMessage );
};

showLocalMessage();
// console.log( localMessage ); // out of scope: crashes

// var inside a block //////////////////////////////////////////////////////////
if (1000 > 2) {
  var hotdogs = Infinity; // global scope
  console.log('how many hotdogs?', hotdogs); // works
}

console.log('how many hotdogs?', hotdogs); // works

// let inside a block //////////////////////////////////////////////////////////
if (1000 > 2) {
  let goldfish = 777; // only exists inside the block
  console.log('how many goldfish?', goldfish); // works
}

// console.log('how many goldfish?', goldfish); // crashes

const bros = ['Groucho', 'Harpo', 'Chico'];
for (let i = 0; i < bros.length; i++) {
  console.log( bros[i] );
};

// console.log(i); // crashes: i goes out of scope after the block.

// const inside a block ////////////////////////////////////////////////////////
// const has the same block scope as let

if (1000 > 2) {
  const password = 'swordfish';
  console.log(password);
}
