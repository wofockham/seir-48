console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// .each() /////////////////////////////////////////////////////////////////////
_(nums).each(function (n, index, entireArray) {
  console.log( `n: ${ n }, index: ${ index }, entireArray: ${ entireArray }` );
});


// .each() with an object //////////////////////////////////////////////////////
const sales = {
  January: 15,
  February: 11,
  March: 3
};

_(sales).each(function (amount, month) {
  console.log(`In ${ month } the sales were ${ amount }.`);
});


// .map() //////////////////////////////////////////////////////////////////////
const byNineteen = function (n) {
  return n * 19;
};

const multiples = _(nums).map( byNineteen );

// .map() for objects //////////////////////////////////////////////////////////
const salesInfo = _(sales).map(function (total, month) {
  return `${ total } sales in ${ month }`;
});
console.log(salesInfo);


// .reduce() ///////////////////////////////////////////////////////////////////
const total = _(nums).reduce(function (runningTotal, n) {
  console.log(`runningTotal: ${ runningTotal }, n: ${ n }, return: ${ runningTotal + n }`)
  return runningTotal + n; // this return value is the next running total.
});
console.log(total);

// const add = function (a, b) {
//   return a + b;
// };
//
// const total = _(nums).reduce(add);
// console.log(total);

// .reduce() also works for objects ////////////////////////////////////////////

// .find() /////////////////////////////////////////////////////////////////////
const divisibleByFive = function (n) {
  console.log('considering', n);
  return n % 5 === 0;
};

const fivey = _(nums).find(divisibleByFive);

// .filter() ///////////////////////////////////////////////////////////////////
const allMultiplesOfFive = _(nums).filter(divisibleByFive);

// .reject() ///////////////////////////////////////////////////////////////////
const notMultiplesOfFive = _(nums).reject(divisibleByFive);
console.log(notMultiplesOfFive);

// .pluck //////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'Groucho', instrument: 'guitar', disposition: 'surly'},
  {name: 'Harpo', instrument: 'harp', disposition: 'angelic'},
  {name: 'Chico', instrument: 'piano', disposition: 'lecherous'}
];
const instruments = _(bros).pluck('instrument');
console.log(instruments);
