//  functions are values
// anonymous function -> a function without a name
// function saved inside an object -> method
// asynchronous code -> The computer won't wait for a line to finish before going to the next line

function greeting() {
    console.log("Hello World")
}

greeting();

const function1 = function greeting() {
    console.log("HELLO WORLD")
}

console.log(function1)
console.log(typeof function1) //function


// passing function into a function
function run(param) {
    param()
}

run(function() {
    console.log("hello1")
})

// setting timeout -> asynchronous code
setTimeout(function() {
    console.log('set timeout') // code will run line by line (synchronous code)
}, 3000);

console.log('next test') // displayed first then timeout follows  (same as set interval)

// setInterval()
setInterval(function() {
    console.log('set interval') 
}, 3000);


// Another way to loop an array - for each
[ 
    'read books',
    'go work out',
    'take a shower'
].forEach(function(value) {
    console.log(value)
})