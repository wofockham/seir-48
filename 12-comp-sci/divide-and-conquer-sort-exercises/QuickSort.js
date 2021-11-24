function quickSort (arr){
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.shift();

  // O(2N) less code:
  const lessThan = arr.filter(element => element < pivot);
  const greaterThan = arr.filter(element => element >= pivot);

  // O(N) more code
  // const lessThan = [];
  // const greaterThan = [];
  //
  // arr.forEach((element) => {
  //   if (element < pivot) {
  //     lessThan.push(element);
  //   } else {
  //     greaterThan.push(element);
  //   }
  // });

  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
}

module.exports = quickSort;
