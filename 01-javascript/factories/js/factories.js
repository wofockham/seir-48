

// Factory (unofficial standard)

const catFactory = function (n, a, f) {
  return {
    name: n,
    age: a,
    furColor: f,
    species: 'feline',
    carnivore: true
  };
};

const cuteCats = [
  catFactory('Angel', 18, 'grey'),
  catFactory('Evil', 14, 'red'),
  catFactory('Meh', 12, 'white')
];

console.table( cuteCats );

for (let i = 0; i < cuteCats.length; i++) {
  console.log(`${ cuteCats[i].name } is ${ cuteCats[i].furColor }`);
}




// Prototypes (official but most people hate it)
