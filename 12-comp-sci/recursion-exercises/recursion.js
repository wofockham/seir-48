// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax (array, largest=-Infinity){
  // base case
  if (array.length === 0) {
    return largest;
  }

  // do actual work
  if (array[0] > largest) {
    largest = array[0];
  }

  // recurse one step closer to the base case
  const rest = array.slice(1);
  return findMax(rest, largest);
}

function factorial(){
    // This function returns the factorial of a given number.
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (n === 1 || n === 2) {
      return 1;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }

}

function coinFlips (tosses){ // not recursive
  const combinations = [];

  // Helper:
  const flip = function (soFar='') {
    // console.log('soFar', soFar, soFar.length === tosses);
    if (soFar.length === tosses) {
      combinations.push( soFar ); // base case
    } else {
      flip(soFar + 'H');
      flip(soFar + 'T');
    }
  }

  flip();
  return combinations;
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}
