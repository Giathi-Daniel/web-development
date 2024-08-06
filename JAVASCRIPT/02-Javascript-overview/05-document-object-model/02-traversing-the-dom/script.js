// to get child element from the element
let output

const parent = document.querySelector(".parent")
output = parent.children; //gives all the child
output = parent.children[1] //child 2
output = parent.children[1].innerText //child 2

parent.children[1].innerText = 'Child Two'
parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText = 'Child Three'

// get parent from child
const child = document.querySelector('.child')

output = child.parentElement
child.parentElement.style.border = "1px solid #aaa"
child.parentElement.style.padding = "10px"

// sibling elements
const secondItem = document.querySelector('.child:nth-child(2');
output = secondItem
output = secondItem.nextElementSibling

secondItem.nextElementSibling.style.color = 'red'

console.log(output)