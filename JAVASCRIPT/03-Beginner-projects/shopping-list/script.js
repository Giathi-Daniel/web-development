// console.log(document.getElementById('app-title').getAttribute('id'))

// console.log(document.getElementById('app-title').setAttribute('class', 'title'));

const title = document.getElementById('app-title')

// title.textContent = 'Hellow World'
title.innerHTML = '<strong>Shopping List</strong>'

title.style.color = "#fe32e"

// QueryseclectorAll()
const listItems = document.querySelectorAll('.item')

// listItems.forEach((item, index) => {
//     item.style.color = "violet-blue"

//     if(index === 1) {
//         item.remove()
//     }

//     if(index === 4) {
//         item.innerHTML = ` Sweetmelon
//         <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//         </button>`
//     }
// })

const listItemsClasses = document.getElementsByClassName('item');
console.log(listItemsClasses[1].innnerText);