function removeHeader() {
    const header = document.querySelector('header')
    header.remove()
}
removeHeader()

function removeFirstItem() {
    const ul = document.querySelector('.items')
    const li = document.querySelector('li:first-child')

    ul.removeChild(li) //first get the parent then the child
}
removeFirstItem()

const removeItem3 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove()

removeItem3(2)

// eventListener
const text = document.querySelector('p')
const itemList = document.querySelector('.items')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    itemList.classList.forEach((c) => console.log(c))
    // text.classList.add('add')
   text.classList.toggle('hidden')
})
