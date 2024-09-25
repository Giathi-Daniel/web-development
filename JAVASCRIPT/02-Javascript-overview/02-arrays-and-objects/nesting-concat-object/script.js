const cars = ['Bugatti', 'BMW', 'Range Rover'];
const bikes = ['Yamaha', 'Suzuki', 'BMW', 'Ninja']

// cars.push(bikes) //create a nested array

// x = cars[3][3] //access nested array

const allLuxury = [cars, bikes]

x = allLuxury[1][1]

// concatenation method
x = cars.concat(bikes) //merges the two arrays but not in nested format

// spread operator (...)
x = [...cars, ...bikes] //elements in cars and bikes not the array itself
x = [...cars, bikes] //elements in cars but bikes as an array

// flatten arrays
const arr = [1, ["Ninja", "BMW"], 2, ["Suzuki", "Yamaha"], 8]; //a nested array
// alert(arr)
x = arr.flat();

//Methods on array objects
x = Array.isArray(cars) //checks an array
x = Array.from('12345')

console.log(x)

//1. create an array and mutate it in descending order
const Arr = [1,2,3,4,5];
Arr.unshift(0) //add to the 1st index
Arr.push(6) // add the el to the last index
console.log(Arr.reverse())

//2. concat 2 arrays and remove the recurring value
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10]

// let arr3 = arr1.slice(0, 4).concat(arr2);
arr1.pop(4)
// console.log(arr1)
let arr3 = [...arr1, ...arr2]

console.log(arr3)