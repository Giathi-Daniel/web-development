const http = require('http')

const server = http.createServer((req, res) => {
    // access the req and it's url property and check the default route
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Welcome to the landing page')
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Welcome to the about us page')
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('Page not found.')
    }
})

const PORT = 5000

server.listen(PORT, () => {
    console.log('listening on port')
})