let x;

const num = new Number(5);

x= num.toLocaleString('ar-EG'); //rep of number 5 in EGYPT

console.log(x)



// random numbers
let y = Math.floor(Math.random() * 100 + 1);
let z = Math.floor(Math.random() * 50 + 1);
let result;

result = alert(`y + z = ${y + z}`)

result = alert(`y - z = ${y - z}`)

result = alert(`y * z = ${y * z}`)

result = alert(`y % z = ${y % z}`)