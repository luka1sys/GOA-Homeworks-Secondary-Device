const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/cars' && req.method === 'GET') {
        fs.readFile('./cars.json', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end('error')
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data)
            }
        })
    } else {
        res.end('Not Found brooo');
    }
})
server.listen(3000, () => {
    console.log('Server is running ');
});