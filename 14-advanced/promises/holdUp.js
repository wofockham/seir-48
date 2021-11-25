// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise (so it works with .then)

// YOUR CODE HERE

holdUp(3000).then(() => {
  console.log('3 seconds has passed');
});
