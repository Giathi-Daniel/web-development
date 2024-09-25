const itemInput = document.getElementById('item-input');

// const onKeyPress = (e) => console.log('keypress') //taps it once
// const onKeyUp = (e) => console.log('keyup')
const onKeyDown = (e) => {
    // key
    // console.log(e.key) //logs out text in the console
    // if(e.key === 'Enter') {
    //     alert('You pressed enter')
    // }

    // keyCode -> gives digits for a key
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    if(e.keyCode === 13) {
        alert('You pressed Enter')
    }

    // code
    if(e.code === 'Digit1') {
        alert('You pressed 1')
    }

    console.log('Shift' + e.shiftKey)

} //adds simultineaously


// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)