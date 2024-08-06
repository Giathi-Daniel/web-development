const logo = document.querySelector('.logo')

function Click() {
    console.log('click event')
}
function DoubleClick() {
    if (document.body.style !== 'orange') {
        document.body.style.backgroundColor = 'orange'
        document.body.style.color = 'white'
    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'orange'
    }
    
}
function onMouseOver() {
    console.log('mouse over event')
}
function onMouseOut() {
    console.log('mouse out event')
}
function onDragStart() {
    console.log('drag start')
}
function onDrag() {
    console.log('drag event')
}
function onDragEnd() {
    console.log('drag end event')
}



logo.addEventListener('click', Click)
logo.addEventListener('dblclick', DoubleClick)
logo.addEventListener('mouseover', onMouseOver)
logo.addEventListener('mouseout', onMouseOut)
logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragend', onDragEnd)