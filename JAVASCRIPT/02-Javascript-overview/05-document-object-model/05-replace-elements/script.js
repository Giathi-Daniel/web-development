// Option 1
function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child')

    const li = document.createElement('li')
    li.textContent = 'Replaced first'

    firstItem.replaceWith(li)
}
replaceFirstItem()

// Option 2
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)')

    secondItem.outerHTML = '<li>Replaced Second</li>'
}
replaceSecondItem()

// Option 3 -> replace all the elements inthe list
function replaceAllItems() {
    const lis = document.querySelectorAll('li')
    // lis.forEach((item, index) => {
    //     // item.outerHTML = '<li>Replace All</li>'
    //     // if(index === 1) {
    //     //     item.innerHTML = 'Second Item'
    //     // } else {
    //     //     item.innerHTML = 'Replace All'
    //     // }

    // })
    lis.forEach((item, index) => item.innerHTML = index === 1 ? 'Second Item' : 'Replace All')
}
replaceAllItems()

// Option 4 -> replaceChild
function replaceChildHeading() {
    const header = document.querySelector('header')
    const h1 = document.querySelector('h1')

    const h2 = document.createElement('h2')
    h2.textContent = 'Shopping List'

    header.replaceChild(h2, h1) //the h2 child will replace the h1
}