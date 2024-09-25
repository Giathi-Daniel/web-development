let isAutoPlaying = false; //check if we're playing
let intervalID;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalID = setInterval(() => {
            playGame();
        }, 1000)
        isAutoPlaying = true;
    } else {
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
}