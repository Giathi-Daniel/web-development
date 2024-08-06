const form = document.getElementById('formData')


function onSumbit(e) {
    e.preventDefault();

    const name = document.getElementById('nameInput').value
    const email = document.getElementById('emailInput').value

    if(name === '' || email === '') {
        alert('Please fill in all fields')
        form.style.outlineColor = 'red'
        return;
    }

    console.log(name, email)
}

form.addEventListener('submit', onSumbit)

// formData object
function onSumbit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    // const name = formData.get('name') 
    // const email = formData.get('email')

    // get all entries
    const entries = formData.entries()
    console.log(entries)

    for(let entry of entries) {
        console.log(entry[0])
        console.log(entry[1])
    }
}
form.addEventListener('submit', onSumbit2)