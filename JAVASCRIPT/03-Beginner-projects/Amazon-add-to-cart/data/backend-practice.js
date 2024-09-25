// send http message
const xhr = new XMLHttpRequest();

// waiting for the response. load -> response has loaded
xhr.addEventListener('load', () => {
    console.log(xhr.response) //hence it will not be undefined
})

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); //asynchronous code -> does not wait for the line of code to finish
//xhr.response //wait for the response to come back first because of asynchronous coded

// url paths -> /hello in (https://supersimplebackend.dev/hello)