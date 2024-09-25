const itemInput = document.getElementById('item-input')

function onFocus() {
    console.log('Input is focused')
    itemInput.style.outline = "1px solid red"
    itemInput.style.borderRadius = '.3rem'
}

function onBlur() {
    itemInput.style.outline = 'none'
}

itemInput.addEventListener('onfocus', onFocus);
itemInput.addEventListener('onblur', onBlur);