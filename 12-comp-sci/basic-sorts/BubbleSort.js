function bubbleSort (array) {
  let needToIterate = true; // Assume the worst: iterate at least once.

  let end = array.length - 1;

  while (needToIterate) {
    needToIterate = false; // Assume we're done.

    for (let i = 0; i < end; i++) {
      if (array[i] > array[i+1]) {
        [ array[i], array[i+1] ] = [ array[i+1], array[i] ]; // destucturing for parallel assignment
        needToIterate = true;
      }
    }
    end--;
  }

  return array;
}

module.exports = bubbleSort;
