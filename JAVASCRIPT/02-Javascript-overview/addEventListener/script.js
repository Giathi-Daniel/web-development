let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
const jsBtn = document.querySelector('js_button');

jsBtn.addEventListener('click', () => {
    alert('hi');
    // const jsInfo = document.querySelector('.js-log-info');

    // jsInfo.innerHTML = `<p>${data.player} ${data.score}</p>`
})



//            QUIZ 2
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let sentence = `The ${arr.length} ${desc} are`
    const lastIndex = arr.length - 1 //to avoid comma
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            sentence += arr[i]
        } else {
            sentence += arr[i] + ", "
        }
    }
    return sentence
}

const generate = generateSentence("most paid programming languages", ["Javascript", "Python"])
console.log(generate)
