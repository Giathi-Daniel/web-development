const listItems = document.querySelectorAll('li')
const list = document.querySelector('.list-items') // eventlistener on the parent

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'li') {
        e.target.remove()
    }
})

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'li') {
        e.target.style.color = 'red'
    }
})

// listItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.remove()
//     })
// })