// Array to hold all promises
const promises = [];

// Loop to create 10 promises with different setTimeout durations
for (let i = 3; i <= 10; i++) {
    promises.push(new Promise(function(myResolve, myReject) {
        setTimeout(function(){ myResolve("I love You !!"); }, i * 1000);  
    }));
}

// Function to handle each resolved promise
function handlePromise(value) {
    document.getElementById("demo").innerHTML += value + "<br>";
}

// Attach a .then() handler to each promise
promises.forEach(function(promise) {
    promise.then(handlePromise);
});
