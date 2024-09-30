const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// .on -> an event listener (listening for a data event)
readStream.on('data', (chunk) => {
    console.log('------- NEW CHUNK -------------')
    console.log(chunk)
    writeStream.write('\n NEW CHUNK\n')
    writeStream.write(chunk)
})

// piping -> read data from the readStream and write data to the writeStream
readStream.pipe(writeStream)