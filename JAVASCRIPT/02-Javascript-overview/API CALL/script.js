// require('dotenv').config();

// const APIKEY = process.env.APIKEY;
const apiURL = `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=London&aqi=no`;
const outputElement = document.getElementById('output');

// POST REQUEST -> Send data to an API
// const data = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
// }

// const requestOptions = {
//     method: 'POST',
//     Headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// }

// Make a GET request
fetch(apiURL)
.then(response => {
    if(!response.ok) {
        if(response.status === 404) {
            throw new Error('Data was not found')
        } else if (response.status === 500) {
            throw new Error('Server error')
        } else {
            throw new Error('Network response was not ok')
        }
    }
    return response.json()
})
.then(data => {
   const temperature = data.current.temp_c
   const description = data.current.condition.text
   const location = data.location.name

   outputElement.innerHTML = `<p>Temperature in ${location}: ${temperature}Celcius</p>
                                <p>Condition: ${description}</p>`
})
.catch(error => {
    console.error('Error:', error)
})