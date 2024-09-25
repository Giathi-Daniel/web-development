// Working with prototypes
let x

const s = new String("Hello World!")

x = s.__proto__;

x = s.toUpperCase(5)
x = s.toLowerCase(1)

x = s.charAt(0) //first character

x = s.indexOf('0') //index of d

x = s.substring(0, 5) //hello

x = s.slice(0, 5) //hello

x = s.slice(-11, -6) // slice can start at negatives

x = s.replace("World", "Dear")

x = s.includes("wor") //true -> included in the string

x = s.split(" ") //returns an array
x = s.split("") //returns an array

console.log(x)


// Make the first the sentece to Uppercase
const myString = 'developer'

let myNewString; 

myNewString = myString[0].toUpperCase() + myString.substring(1); 

alert(myNewString)