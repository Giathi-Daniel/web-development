// CommonJS -> every file is module (by default)
// Modules -> Encaspulated Code (only share minimu)
const names = require('./names') 
const greet = require('./utils')
console.log(greet)

greet('Joy')
greet(names.john)
greet(names.peter)

