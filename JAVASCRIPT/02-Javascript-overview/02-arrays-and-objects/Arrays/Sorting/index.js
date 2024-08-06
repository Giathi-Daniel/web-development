let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
function apple() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎";
        }
    }
}

// Create a function that puts the oranges onto the orangeShelf
function orange() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊";
        }
    }
}

// Call the functions to execute them
apple();
orange();
