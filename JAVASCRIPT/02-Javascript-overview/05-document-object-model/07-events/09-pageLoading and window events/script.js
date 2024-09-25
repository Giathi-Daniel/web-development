// if the script tag is in the head
window.onload = function () {
    document.querySelector('h1').textContent = 'Hello World'
}

window.addEventListener('resize', () => {
    document.querySelector('h1').textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`
})

window.onscroll = () => {
    console.log(`Scrolled: ${window.scrollX} to ${window.scrollY}`)

    if(window.scrollY > 0) {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'red'
        document.querySelector('h1').style.color = 'black'
    }
}

window.onfocus = () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'orange'
    })
}

window.onblur = () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'blue'
    })
}