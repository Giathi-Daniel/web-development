// The event is first captured and handled by the innermmost ellement and then propagated to outer elements
const button = document.querySelector('form button')
const div = document.querySelector('form div:nth-child(2)')
const form = document.querySelector('form')

button.addEventListener('click', (e) => {
    alert('button was clicked')
    e.stopPropagation() // stops propagation
})

div.addEventListener('click', () => {
    alert('Div was clicked')
})

form.addEventListener('click', () =>  {
    alert('form was clicked')
})

document.body.addEventListener('click', () =>  {
    alert('body was clicked')
})