const fs = require('fs')

// fs.readFile('./docs/file1.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString());
// })

// console.log('Last line') // logged first 


// fs.writeFile('./docs/file1.txt', 'hello node', () => {
//     console.log('File written')
// });

// test with a file that does not exists
// fs.writeFile('./docs/file2.txt', 'hello again', () => {
//     console.log('File written')
// });

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err)
        } 
        console.log('Folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('Folder deleted')
    })
}

if (fs.existsSync('./docs/deleted.txt')) {
    fs.unlink('./docs/deleted.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('File deleted')
    })
}
