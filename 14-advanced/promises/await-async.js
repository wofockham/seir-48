// await/async: an evolution of promises

const fs = require('fs'); // filesystem: part of the standard library for Node.js

// A Promise wrapper around the above fs.readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        return reject(err); // invoke all the .catch() methods
      }

      resolve(content); // invoke all the .then() methods
    })
  });
};

// evolution:

// fs.readFile(filename, 'utf-8', (err, data) => {
//   console.log(data);
// });

// Returns a promise: .then
// readFile(filename).then((data) => {
//   console.log(data);
// });

const printFlintstones = async function () {
  const data = await readFile('flintstones.txt');
  console.log(data);
  console.log('this function is now complete');
  console.log('thanks for using this program');
};

printFlintstones();

// axios ///////////////////////////////////////////////////////////////////////

const axios = require('axios');

axios.get('http://numbersapi.com/random/trivia').then(( {data} ) => {
  console.log('Number trivia: ', data);
});

// await/async version: ////////////////////////////////////////////////////////
const numberFact = async () => {
  const { data } = await axios.get('http://numbersapi.com/random/trivia');
  console.log('Number trivia', data);
};
numberFact();
