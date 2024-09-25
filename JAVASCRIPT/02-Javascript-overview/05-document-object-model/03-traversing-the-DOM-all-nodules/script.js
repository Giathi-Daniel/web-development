// get nodes {Nodes in general}
let output

const parent = document.querySelector('.parent')
output = parent.childNodes
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].textContent;

output = parent.childNodes[3].innerText = 'Child One'

output = parent.lastChild //#text -> means whitespace

//get ParentNode from child
const child = document.querySelector('.child')

output = child.parentNode
output = child.parentElement //same

child.parentNode.style.backgroundColor = '#ddd'
child.parentNode.style.padding ='10px'

console.log(output)