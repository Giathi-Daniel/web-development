//map -> creates a new array
// whatever returned added to the new array

// creating objects
const suzuki = {name: 'suzuki'};
const ducati = {name: 'ducati'};
const yamaha = {name: 'yamaha'};

// creating a new map
const bikes = new Map();

// adding elements to the map
bikes.set('suzuki', 4.4);
bikes.set('ducati', 3.5);
bikes.set('yamaha', 3.1);

document.getElementById('root').textContent = bikes.get('suzuki');

// map2
console.log([1,3,6].map((value, index)=> {return value * 2}))
// shorthand
console.log([1,3,6].map(value=> value * 2))