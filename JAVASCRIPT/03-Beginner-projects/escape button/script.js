const escButton = document.getElementById('esc-button')
const OFFSET = 100

escButton.addEventListener('click', () => {
    alert('Nice Try')
    window.close()
})

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = escButton.getBoundingClientRect() //get h, w, x, & y
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET
    if(Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 10,
        )
    }
})

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = escButton.getBoundingClientRect()

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = window.right - buttonBox.width - OFFSET
    }

    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = window.left + OFFSET
    }

    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.button - buttonBox.height - OFFSET
    }

    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + OFFSET
    }

    escButton.style.left = `${left}px`
    escButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}