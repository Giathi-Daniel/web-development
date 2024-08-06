const logo = document.querySelector('logo')

function onClick(e) {
    // console.log(e.target) // the element that triggered the event
    // console.log(e.currentTarget) // the element that the eventListener is attached to
    // console.log(e.offsetX) //coordinates where I click within the element
    console.log(e.pageX)
    console.log(e.pageY)
}

logo.addEventListener('click', onClick)

document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault()
    console.log('Link was clicked')
})

// e.preventDefault() -> used for form validation