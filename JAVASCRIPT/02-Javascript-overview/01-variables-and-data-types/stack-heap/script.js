// values stored in stack
const name = "John"
const age = 30;

let newName = name
newName = "Emmanuel"

console.log(name, newName)

// reference values stored in heap
const person = {
    name: "David",
    age: 40
}

let newPerson = person
newPerson.name = "Davidson"


console.log(person, newPerson)