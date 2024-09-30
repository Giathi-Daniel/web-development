setTimeout(() => {
    console.log('set timeout')
    clearTimeout(int)
}, 3000)

const int =setInterval(() => {
    console.log("set interval")
}, 1000)

// get correct directory
console.log(__dirname);
console.log(__filename);