const div = document.createElement('div')
div.className = 'my-element' //adds a class
div.id = 'my-element'

// div.innerText = 'Hello world'

const text = document.createTextNode('Hello World!')
div.appendChild(text)
document.body.appendChild(div) //very end of the body tag

// console.log(div)

// Create a function to add a list in the HTML document
// 1. Quick way and dirty
function createListItem(item) {
    const li = document.createElement('li')

    li.innerHTML = `
        ${item}
        <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"><i>
        </button>
    `

    document.querySelector('.items').appendChild(li)
}
createListItem('Eggs')

// 2. Clean & Perfomant -> creat each element
// function createNewItem(item) {
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(item))

//     const button = document.createElement('button')
//     button.className = 'remove-item btn-link text-red'

//     const icon = document.createElement('i')
//     icon.className = 'fa-solid fa-xmark'

//     button.appendChild(icon)
//     li.appendChild(button)

//     document.querySelector('.items').appendChild(li)
// }
// createNewItem('Onions')

// refactor to multiple functions -> make code reusable
function createNewItem(item) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(item))

    const button = createButton('remove-item btn-link text-red')

    li.appendChild(button)

    document.querySelector('.items').appendChild(li)
}
createNewItem('Onions')
createNewItem('Milk')

function createButton(classes) {
    const button = document.createElement('button')
    button.className = classes

    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)

    return button
}

function createIcon(classes) {
    const icon = document.createElement('i')
    icon.className = classes
    return icon
}

// insertAdjacentElement, insertAdjacentText, insertAdjentHTML