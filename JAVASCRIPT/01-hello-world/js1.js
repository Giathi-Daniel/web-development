// Variables -> containers for storing data types

let fullName = "Dan"
let age = 20;
let isStudent = true;

document.getElementById("p1").innerText = `Hello ${fullName}`;
document.getElementById("p2").innerHTML = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
alert("We are \"Vikings\"");

const cars = ["Volvo", "Mercedes", "Jeep"];
alert(cars.length);

// remove the last item of the fruits
const fruits = ["Banana", "Orange", "Apple"];
alert(fruits.pop());

// add the last item of the fruits
const apples = ["Banana", "Orange", "Apple"];
alert(apples.push("Kiwi"));

// splice method to remove "Orange" and "Apple" from beverages
const beverages = ["Banana", "Orange", "Apple", "Kiwi"];
alert(beverages.splice(1, 2));

//  Sort Fruits alphabetically
const Fruits = ["Banana", "Orange", "Apple", "Kiwi"];
alert(Fruits.sort());

// Date object and alert the current date and time
const d = new Date();
alert(d);

// get the month (0-11) out of a date object
const D = new Date();
alert(D.getMonth());

// Set full year 2020
const date = new Date();
alert(date.setFullYear(2020));

// Tenary Operato
let Age = n;
let voteable = (Age < 18) ? "Too young" : "Old enough";
alert(voteable);

// Simple for loop
for (let i=0; i<5; i++) {
    alert(i);
}

// simple for fruits loop
const fruiTs = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  document.innerHTML(x);
}

// Change the source attribute of an image
document.getElementById('fruitImage').src="https://upload.wikimedia.org/wikipedia.com";

// Change the font style of a p tage with id demo
document.getElementById("p4").style.fontSize = "40px";

// display none
document.getElementById("p4").style.display = "none";